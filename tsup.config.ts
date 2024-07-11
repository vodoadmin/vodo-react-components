import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: [
    "./src/Components/Main-Components/sidebar.tsx",
    "./src/Components/Main-Components/button.tsx",
    "./src/Components/Main-Components/business-card.tsx",
    "./src/Components/Main-Components/business-card.tsx",
    "./src/Components/Main-Components/card-wrapper.tsx",
    "./src/Components/Main-Components/input-file.tsx",
    "./src/Components/Main-Components/MainTabel.tsx",
    "./src/Components/Main-Components/navigation-trail.tsx",
    "./src/Components/Main-Components/PaginationComponent.tsx",
    "./src/Components/Main-Components/search-input.tsx",
    "./src/Components/Main-Components/selector.tsx",
    "./src/Components/Main-Components/status.tsx",
    "./src/Components/Main-Components/switcher.tsx",
    "./src/Components/Main-Components/textarea.tsx",
    "./src/Components/Main-Components/user-input.tsx",
    "./src/Components/Main-Components/user-nav.tsx",
    "./src/Components/Main-Components/user-profile.tsx",
    "./src/index.css",
  ],
  format: ["esm", "cjs"],
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
  plugins: [cssModulesPlugin()],
  external: ["react", "react-dom"],
});
