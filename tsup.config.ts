import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
  },
  format: ["esm", "cjs"],
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
  plugins: [cssModulesPlugin()],
  external: ["react", "react-dom"],
});
