import { defineConfig } from 'tsup';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkgJson = fs.readFileSync(path.resolve(__dirname, './package.json'));

const external = [
  ...Object.keys((pkgJson as any).peerDependencies || {}),
  ...Object.keys((pkgJson as any).dependencies || {}),
];

export default defineConfig({
  entry: ['src/**/*.ts', '!src/test.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  dts: true,
  external,
});
