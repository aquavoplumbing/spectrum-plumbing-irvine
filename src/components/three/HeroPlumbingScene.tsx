"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PlumbingSceneFallback } from "./PlumbingSceneFallback";

export function HeroPlumbingScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL availability and reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      requestAnimationFrame(() => {
        setHasWebGL(false);
      });
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);


    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x071D35, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const cyanRimLight = new THREE.PointLight(0x35C7F4, 4.0, 15);
    cyanRimLight.position.set(-4, -3, 3);
    scene.add(cyanRimLight);

    const blueBackLight = new THREE.DirectionalLight(0x087BDB, 2.0);
    blueBackLight.position.set(0, -4, -4);
    scene.add(blueBackLight);

    // Materials
    // 1. Polished Chrome Pipe Material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9e6f2,
      metalness: 0.95,
      roughness: 0.15,
    });

    // 2. Brushed Copper Pipe Material
    const copperMaterial = new THREE.MeshStandardMaterial({
      color: 0xb85d38,
      metalness: 0.88,
      roughness: 0.28,
    });

    // 3. Water stream material
    const waterMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x35C7F4,
      transmission: 0.75,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.333,
    });

    // 4. Brass Valve Material
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.25,
    });

    // Pipe Assembly Group
    const assemblyGroup = new THREE.Group();

    // Horizontal Chrome Mainline Pipe
    const mainPipeGeo = new THREE.CylinderGeometry(0.38, 0.38, 4.2, 32);
    const mainPipe = new THREE.Mesh(mainPipeGeo, chromeMaterial);
    mainPipe.rotation.z = Math.PI / 2;
    assemblyGroup.add(mainPipe);

    // Pipe Flanges / Connectors
    const flangeGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.18, 32);
    const flange1 = new THREE.Mesh(flangeGeo, chromeMaterial);
    flange1.position.x = -1.6;
    flange1.rotation.z = Math.PI / 2;
    assemblyGroup.add(flange1);

    const flange2 = new THREE.Mesh(flangeGeo, chromeMaterial);
    flange2.position.x = 1.6;
    flange2.rotation.z = Math.PI / 2;
    assemblyGroup.add(flange2);

    // Vertical Copper Supply Pipe
    const copperPipeGeo = new THREE.CylinderGeometry(0.3, 0.3, 3.4, 32);
    const copperPipe = new THREE.Mesh(copperPipeGeo, copperMaterial);
    copperPipe.position.y = 0.4;
    assemblyGroup.add(copperPipe);

    // Central Brass Gate Valve / Manifold Junction
    const valveBodyGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const valveBody = new THREE.Mesh(valveBodyGeo, brassMaterial);
    assemblyGroup.add(valveBody);

    // Valve Turn Wheel on Top
    const wheelTorusGeo = new THREE.TorusGeometry(0.48, 0.08, 16, 32);
    const wheel = new THREE.Mesh(wheelTorusGeo, brassMaterial);
    wheel.position.set(0, 2.1, 0);
    wheel.rotation.x = Math.PI / 2;
    assemblyGroup.add(wheel);

    const wheelStemGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 16);
    const wheelStem = new THREE.Mesh(wheelStemGeo, brassMaterial);
    wheelStem.position.set(0, 1.8, 0);
    assemblyGroup.add(wheelStem);

    // Torus Elbow Fitting
    const elbowGeo = new THREE.TorusGeometry(0.8, 0.28, 16, 32, Math.PI / 2);
    const elbow = new THREE.Mesh(elbowGeo, chromeMaterial);
    elbow.position.set(1.6, -0.8, 0);
    elbow.rotation.z = Math.PI;
    assemblyGroup.add(elbow);

    // Orbiting Water Pulse Ring
    const waterRingGeo = new THREE.TorusGeometry(2.3, 0.07, 16, 64);
    const waterRing = new THREE.Mesh(waterRingGeo, waterMaterial);
    waterRing.rotation.x = Math.PI / 3;
    assemblyGroup.add(waterRing);

    // Smaller accent ring
    const smallWaterRingGeo = new THREE.TorusGeometry(1.6, 0.05, 16, 64);
    const smallWaterRing = new THREE.Mesh(smallWaterRingGeo, waterMaterial);
    smallWaterRing.rotation.y = Math.PI / 4;
    assemblyGroup.add(smallWaterRing);

    scene.add(assemblyGroup);

    // Subtle initial rotation
    assemblyGroup.rotation.x = 0.2;
    assemblyGroup.rotation.y = -0.4;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = (y / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Responsive Resize Handler
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle ambient floating movement
      targetX = mouseX * 0.4;
      targetY = mouseY * 0.4;

      assemblyGroup.rotation.y += (targetX - assemblyGroup.rotation.y + Math.sin(elapsedTime * 0.5) * 0.15) * 0.04;
      assemblyGroup.rotation.x += (targetY - assemblyGroup.rotation.x + Math.cos(elapsedTime * 0.6) * 0.1) * 0.04;
      assemblyGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // Water rings rotation
      waterRing.rotation.z = elapsedTime * 0.4;
      smallWaterRing.rotation.z = -elapsedTime * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries & Materials
      mainPipeGeo.dispose();
      flangeGeo.dispose();
      copperPipeGeo.dispose();
      valveBodyGeo.dispose();
      wheelTorusGeo.dispose();
      wheelStemGeo.dispose();
      elbowGeo.dispose();
      waterRingGeo.dispose();
      smallWaterRingGeo.dispose();

      chromeMaterial.dispose();
      copperMaterial.dispose();
      waterMaterial.dispose();
      brassMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (hasWebGL === false) {
    return <PlumbingSceneFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#061426] via-[#071D35] to-[#0A2646] border border-[#35C7F4]/20 shadow-2xl flex items-center justify-center">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#087BDB]/20 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[160px] h-[160px] rounded-full bg-[#35C7F4]/15 blur-[60px] pointer-events-none" />

      {/* Three.js Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Floating Badge Overlay */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
        <div className="bg-[#071D35]/85 border border-[#35C7F4]/30 backdrop-blur-md rounded-xl px-3.5 py-2 text-white shadow-lg pointer-events-auto">
          <p className="text-[10px] text-[#35C7F4] uppercase font-bold tracking-wider">
            Modern Plumbing Solutions
          </p>
          <p className="text-xs font-semibold text-white">
            Irvine, California Coverage
          </p>
        </div>
      </div>
    </div>
  );
}
