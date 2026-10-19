import { LocationPageData } from "@/types/location";
import { woodbridgeLocationData } from "./woodbridge";
import { turtleRockLocationData } from "./turtle-rock";
import { northwoodLocationData } from "./northwood";
import { westparkLocationData } from "./westpark";
import { universityParkLocationData } from "./university-park";
import { portolaSpringsLocationData } from "./portola-springs";
import { greatParkLocationData } from "./great-park";
import { orchardHillsLocationData } from "./orchard-hills";
import { quailHillLocationData } from "./quail-hill";
import { cypressVillageLocationData } from "./cypress-village";
import { SERVICE_AREAS_DATA, ServiceAreaItem } from "@/data/serviceAreas";

export const ALL_LOCATIONS_DATA: LocationPageData[] = [
  woodbridgeLocationData,
  turtleRockLocationData,
  northwoodLocationData,
  westparkLocationData,
  universityParkLocationData,
  portolaSpringsLocationData,
  greatParkLocationData,
  orchardHillsLocationData,
  quailHillLocationData,
  cypressVillageLocationData,
];

export const LOCATIONS_BY_SLUG: Record<string, LocationPageData> = ALL_LOCATIONS_DATA.reduce(
  (acc, loc) => {
    acc[loc.slug] = loc;
    return acc;
  },
  {} as Record<string, LocationPageData>
);

export function getAllLocations(): LocationPageData[] {
  return ALL_LOCATIONS_DATA.filter((l) => l.published);
}

export function getAllLocationSlugs(): string[] {
  return ALL_LOCATIONS_DATA.filter((l) => l.published).map((l) => l.slug);
}

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return LOCATIONS_BY_SLUG[slug];
}

export function getNearbyServiceAreas(slugs: string[]): ServiceAreaItem[] {
  return slugs
    .map((slug) => SERVICE_AREAS_DATA.find((area) => area.id === slug))
    .filter((area): area is ServiceAreaItem => Boolean(area));
}

export {
  woodbridgeLocationData,
  turtleRockLocationData,
  northwoodLocationData,
  westparkLocationData,
  universityParkLocationData,
  portolaSpringsLocationData,
  greatParkLocationData,
  orchardHillsLocationData,
  quailHillLocationData,
  cypressVillageLocationData,
};
