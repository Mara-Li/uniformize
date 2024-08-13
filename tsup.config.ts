import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"], // Build for commonJS and ESmodules
	dts: false,
	splitting: false,
	sourcemap: true,
	clean: true,
});
