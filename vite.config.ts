import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadedPdf = "C:/Users/Krishna`s pc/.gemini/antigravity-ide/brain/5416eaa9-3a54-471f-b328-9c1327f104da/.user_uploaded/media_1792615366856.pdf";
const targetPdf = path.resolve(__dirname, "public/krishna resume.pdf");

if (fs.existsSync(uploadedPdf)) {
  try {
    fs.copyFileSync(uploadedPdf, targetPdf);
    console.log("[vite] Copied updated resume PDF to public/krishna resume.pdf");
  } catch (err) {
    console.error("[vite] Could not copy resume PDF:", err);
  }
}

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});