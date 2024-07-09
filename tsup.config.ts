import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import fs from "fs";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  plugins: [cssModulesPlugin()],
});
