import { defineConfig } from "vitest/config";
import UnoCSS from "unocss/vite";
import { presetWarp } from "#plugin";

export default (async () => {
  const asyncPreset = await presetWarp({ development: true });

  return defineConfig({
    plugins: [UnoCSS({ presets: [asyncPreset] })],
    test: {
      include: ["./test/*.js"],
      exclude: ["./test/_*"],
    },
  });
})();
