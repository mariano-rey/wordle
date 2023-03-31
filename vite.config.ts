/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import vitestConfig from "./vitest.config"

export default mergeConfig(vitestConfig, defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
}));
