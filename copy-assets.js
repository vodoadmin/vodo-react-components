// const cpx = require("cpx");
// const path = require("path");

import path from "path";
import cpx from "cpx/lib/cpx";

// Define source and destination paths
const srcPath = path.join(__dirname, "src/assets/**/*");
const destPath = path.join(__dirname, "dist/assets");

// Copy assets
cpx.copy(srcPath, destPath, {}, (err) => {
  if (err) {
    console.error("Error copying assets:", err);
  } else {
    console.log("Assets copied successfully!");
  }
});
