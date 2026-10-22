import { ServicePageData } from "@/types/service";
import { emergencyPlumbingData } from "./emergency-plumbing";
import { drainCleaningData } from "./drain-cleaning";
import { waterHeaterRepairData } from "./water-heater-repair";
import { tanklessWaterHeatersData } from "./tankless-water-heaters";
import { leakDetectionData } from "./leak-detection";
import { slabLeakRepairData } from "./slab-leak-repair";
import { sewerLineRepairData } from "./sewer-line-repair";
import { hydroJettingData } from "./hydro-jetting";
import { toiletRepairData } from "./toilet-repair";
import { faucetAndSinkRepairData } from "./faucet-and-sink-repair";
import { garbageDisposalRepairData } from "./garbage-disposal-repair";
import { pipeRepairAndRepipingData } from "./pipe-repair-and-repiping";
import { waterLineRepairData } from "./water-line-repair";
import { gasLineServicesData } from "./gas-line-services";
import { commercialPlumbingData } from "./commercial-plumbing";
import { waterSoftenerInstallationData } from "./water-softener-installation";
import { backflowTestingData } from "./backflow-testing";
import { sumpPumpRepairData } from "./sump-pump-repair";

export const ALL_SERVICES_DATA: ServicePageData[] = [
  emergencyPlumbingData,
  drainCleaningData,
  waterHeaterRepairData,
  tanklessWaterHeatersData,
  leakDetectionData,
  slabLeakRepairData,
  sewerLineRepairData,
  hydroJettingData,
  toiletRepairData,
  faucetAndSinkRepairData,
  garbageDisposalRepairData,
  pipeRepairAndRepipingData,
  waterLineRepairData,
  gasLineServicesData,
  commercialPlumbingData,
  waterSoftenerInstallationData,
  backflowTestingData,
  sumpPumpRepairData,
];

export const SERVICES_BY_SLUG: Record<string, ServicePageData> = ALL_SERVICES_DATA.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<string, ServicePageData>
);

export function getAllServices(): ServicePageData[] {
  return ALL_SERVICES_DATA;
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES_DATA.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getRelatedServices(relatedSlugs: string[]): ServicePageData[] {
  return relatedSlugs
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter((s): s is ServicePageData => Boolean(s));
}

export {
  emergencyPlumbingData,
  drainCleaningData,
  waterHeaterRepairData,
  tanklessWaterHeatersData,
  leakDetectionData,
  slabLeakRepairData,
  sewerLineRepairData,
  hydroJettingData,
  toiletRepairData,
  faucetAndSinkRepairData,
  garbageDisposalRepairData,
  pipeRepairAndRepipingData,
  waterLineRepairData,
  gasLineServicesData,
  commercialPlumbingData,
  waterSoftenerInstallationData,
  backflowTestingData,
  sumpPumpRepairData,
};
