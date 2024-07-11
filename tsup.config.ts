import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: {
    SideBar: "./src/Components/Main-Components/sidebar.tsx",
    Button: "./src/Components/Main-Components/button.tsx",
    BusinessCard: "./src/Components/Main-Components/business-card.tsx",
    CardWrapper: "./src/Components/Main-Components/business-card.tsx",
    DropDown: "./src/Components/Main-Components/card-wrapper.tsx",
    InputFile: "./src/Components/Main-Components/input-file.tsx",
    MainTable: "./src/Components/Main-Components/MainTabel.tsx",
    NavigationTrail: "./src/Components/Main-Components/navigation-trail.tsx",
    PaginationComponent: "./src/Components/Main-Components/PaginationComponent.tsx",
    SearchInput: "./src/Components/Main-Components/search-input.tsx",
    Selector: "./src/Components/Main-Components/selector.tsx",
    Status: "./src/Components/Main-Components/status.tsx",
    Switcher: "./src/Components/Main-Components/switcher.tsx",
    TextArea: "./src/Components/Main-Components/textarea.tsx",
    UserInput: "./src/Components/Main-Components/user-input.tsx",
    UserNav: "./src/Components/Main-Components/user-nav.tsx",
    UserProfile: "./src/Components/Main-Components/user-profile.tsx",
    index: "./src/index.css",
  },
  format: ["esm"],
  minify: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
  plugins: [cssModulesPlugin()],
  external: ["react", "react-dom"],
});
