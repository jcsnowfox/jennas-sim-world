export type ServiceName = 'localApi' | 'worker';
export type ServiceStatus = 'starting' | 'ready' | 'degraded' | 'failed' | 'stopped';
export interface ServiceHealth {
  name: ServiceName;
  status: ServiceStatus;
  version: string;
  pid?: number;
  uptimeMs?: number;
  timestamp: string;
  detail?: string;
  lastHeartbeat?: string;
}
export interface SystemHealthSnapshot {
  status: ServiceStatus;
  services: Record<ServiceName, ServiceHealth>;
  timestamp: string;
}
export interface AppMetadata {
  name: 'Somewhere Ours: Private City';
  version: string;
  phase: 'Phase 1';
}
export const ipcChannels = {
  metadata: 'nightwater:metadata',
  healthGet: 'nightwater:health:get',
  healthRefresh: 'nightwater:health:refresh',
  healthChanged: 'nightwater:health:changed',
} as const;
export interface NightwaterPreloadApi {
  getMetadata(): Promise<AppMetadata>;
  getHealth(): Promise<SystemHealthSnapshot>;
  refreshHealth(): Promise<SystemHealthSnapshot>;
  onHealthChanged(listener: (snapshot: SystemHealthSnapshot) => void): () => void;
}
export const isServiceStatus = (value: unknown): value is ServiceStatus =>
  typeof value === 'string' &&
  ['starting', 'ready', 'degraded', 'failed', 'stopped'].includes(value);
export const createStoppedHealth = (
  name: ServiceName,
  version: string,
  detail = 'Not started',
): ServiceHealth => ({
  name,
  status: 'stopped',
  version,
  timestamp: new Date().toISOString(),
  detail,
});
export const summarizeSystemStatus = (services: ServiceHealth[]): ServiceStatus => {
  if (services.some((s) => s.status === 'failed')) return 'failed';
  if (services.some((s) => s.status === 'degraded')) return 'degraded';
  if (services.every((s) => s.status === 'ready')) return 'ready';
  if (services.some((s) => s.status === 'starting')) return 'starting';
  return 'stopped';
};
