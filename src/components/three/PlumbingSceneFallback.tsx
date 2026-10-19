"use client";

import React from "react";
import { Shield, Droplets, CheckCircle, PhoneCall, Gauge } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";

export function PlumbingSceneFallback() {
  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#061426] via-[#071D35] to-[#0B2E54] border border-[#35C7F4]/20 shadow-2xl p-6 flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#087BDB]/20 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[180px] h-[180px] rounded-full bg-[#35C7F4]/15 blur-[60px] pointer-events-none" />

      {/* Stylized 3D Metallic Plumbing Composition */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Central Graphic Composition */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#35C7F4]/30 animate-[spin_24s_linear_infinite]" />
          
          {/* Inner Glowing Ring */}
          <div className="absolute inset-4 rounded-full border border-[#087BDB]/50 shadow-[0_0_25px_rgba(8,123,219,0.3)] bg-gradient-to-tr from-[#061426]/90 to-[#0B2E54]/80 backdrop-blur-md flex items-center justify-center">
            
            {/* Geometric Metallic Pipe Assembly SVG */}
            <svg
              className="w-36 h-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="3D metallic plumbing piping illustration"
            >
              <defs>
                {/* Chrome pipe gradient */}
                <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4A657E" />
                  <stop offset="35%" stopColor="#E2EBF2" />
                  <stop offset="60%" stopColor="#8DA3B5" />
                  <stop offset="100%" stopColor="#304455" />
                </linearGradient>

                {/* Copper pipe gradient */}
                <linearGradient id="copperGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9C4A2F" />
                  <stop offset="40%" stopColor="#F5B29B" />
                  <stop offset="70%" stopColor="#D97757" />
                  <stop offset="100%" stopColor="#5E2616" />
                </linearGradient>

                {/* Water flow gradient */}
                <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#35C7F4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#087BDB" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Horizontal chrome pipe */}
              <rect x="15" y="65" width="130" height="30" rx="6" fill="url(#chromeGrad)" />
              <rect x="10" y="61" width="12" height="38" rx="3" fill="#D3DEE6" />
              <rect x="138" y="61" width="12" height="38" rx="3" fill="#8DA3B5" />

              {/* Vertical copper pipe intersecting */}
              <rect x="65" y="15" width="30" height="130" rx="6" fill="url(#copperGrad)" />
              <rect x="61" y="10" width="38" height="12" rx="3" fill="#F5B29B" />
              <rect x="61" y="138" width="38" height="12" rx="3" fill="#9C4A2F" />

              {/* Central intersection valve / manifold */}
              <circle cx="80" cy="80" r="28" fill="#14263D" stroke="#35C7F4" strokeWidth="3" />
              <circle cx="80" cy="80" r="16" fill="url(#waterGrad)" />

              {/* Glowing Water Droplet Icon at Center */}
              <path
                d="M80 68 C80 68 73 78 73 83 C73 87 76 90 80 90 C84 90 87 87 87 83 C87 78 80 68 80 68 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* Floating badge 1: Pressure Status */}
          <div className="absolute -top-2 right-2 bg-[#071D35]/90 border border-[#35C7F4]/40 backdrop-blur-md rounded-xl px-3 py-2 text-white shadow-lg flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#35C7F4]" />
            <div className="text-left">
              <p className="text-[10px] text-[#A6C5E2] uppercase font-semibold">Irvine Water Flow</p>
              <p className="text-xs font-bold text-white">Pressure Regulated</p>
            </div>
          </div>

          {/* Floating badge 2: Direct Call Assistance */}
          <div className="absolute -bottom-2 -left-2 bg-[#071D35]/90 border border-[#087BDB]/50 backdrop-blur-md rounded-xl px-3 py-2 text-white shadow-lg flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#35C7F4]" />
            <div className="text-left">
              <p className="text-[10px] text-[#A6C5E2] uppercase font-semibold">Live Assistance</p>
              <p className="text-xs font-bold text-white">{BUSINESS_PHONE.display}</p>
            </div>
          </div>
        </div>

        {/* Feature summary tags below */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-[#EAF6FF]/90">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-3.5 h-3.5 text-[#35C7F4]" />
            Copper & PEX Piping
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-3.5 h-3.5 text-[#35C7F4]" />
            Slab Leak Diagnostics
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-3.5 h-3.5 text-[#35C7F4]" />
            Water Heater Services
          </span>
        </div>
      </div>
    </div>
  );
}
