declare module 'node:path' {
  export function resolve(...pathSegments: string[]): string;
  export function dirname(p: string): string;
}

declare module 'node:url' {
  export function fileURLToPath(url: string): string;
}

declare const __dirname: string;
