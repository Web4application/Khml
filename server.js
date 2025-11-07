import express from "express";
import chokidar from "chokidar";
import { exec } from "child_process";
import path from "path";
import fs from "fs-extra";

const app = express();
const PORT = 3000;

const distDir = path.resolve("dist");
const runtimeDir = path.resolve("runtime");

// Compile once on start
await fs.ensureDir(distDir);
exec("node khml.js");

// Watch for KHML changes
const watcher = chokidar.watch("src/**/*.khml");
watcher.on("change", () => {
  console.log("♻️ Rebuilding KHML...");
  exec("node khml.js");
});

app.use(express.static(distDir));
app.use(express.static(runtimeDir));

app.listen(PORT, () => {
  console.log(`🚀 KHML Dev Server running at http://localhost:${PORT}`);
});
