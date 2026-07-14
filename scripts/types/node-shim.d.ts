declare module 'node:fs' {
  export function readFileSync(path: string): Buffer;
  export function readFileSync(path: string, encoding: string): string;
  export function readdirSync(path: string): string[];
  export function statSync(path: string): { isDirectory(): boolean; size: number };
  export function existsSync(path: string): boolean;
}

declare module 'node:child_process' {
  export function execFileSync(
    command: string,
    args?: string[],
    options?: { encoding?: string },
  ): string;
}

declare module 'node:crypto' {
  export function createHash(algorithm: string): {
    update(data: Buffer | string): { digest(encoding: 'hex'): string };
  };
}

declare module 'node:path' {
  export function join(...paths: string[]): string;
  export function relative(from: string, to: string): string;
}

declare module 'node:url' {
  export function pathToFileURL(path: string): { href: string };
}

declare class Buffer {
  readonly length: number;
  includes(value: number | string | Buffer): boolean;
  toString(encoding?: string): string;
  static from(value: string | number[]): Buffer;
}

declare const process: {
  argv: string[];
  exitCode?: number;
};

declare const console: {
  log(message?: unknown): void;
  error(message?: unknown): void;
};

interface ImportMeta {
  url: string;
}
