import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/src/**/*.test.{js,tsx,ts}"],
  },
} as VitestConfigExport);
