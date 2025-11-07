import express from "express";
import chokidar from "chokidar";
import { exec } from "child_process";
import path from "path";
import fs from "fs-extra";

const app = express();
const PORT = 3000;
const distDir = path.resolve("dist");
const runtimeDir = path.resolve("runtime");

// Compile once
await fs.ensureDir(distDir);
exec("node khml.js");

// Watcher
chokidar.watch("src/**/*.khml").on("change", () => {
  console.log("♻️ Rebuilding KHML...");
  exec("node khml.js");
});

// Serve static
app.use(express.static(distDir));
app.use(express.static(runtimeDir));

// --- AI route (stub) ---
app.get("/ai", async (req, res) => {
  const { prompt } = req.query;
  // TODO: replace this stub with a real call to your AI backend
  res.json({ text: `This is a mock AI response to: "${prompt}"` });
});

app.listen(PORT, () => {
  console.log(`🚀 KHML Dev Server with AI running at http://localhost:${PORT}`);
});
