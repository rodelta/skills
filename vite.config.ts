import { defineConfig } from "vite-plus";

const ignorePatterns = ["upstream/**"];

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: { ignorePatterns },
  lint: { ignorePatterns },
});
