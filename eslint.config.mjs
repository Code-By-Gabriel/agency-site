import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Allow apostrophes, quotes in JSX text - no need to escape them
      "react/no-unescaped-entities": "off",
      // Allow `any` when we explicitly type it
      "@typescript-eslint/no-explicit-any": "warn",
      // Unused vars are usually caught by TS anyway
      "@typescript-eslint/no-unused-vars": "warn",
      // setState in effects is sometimes legitimate (mounted patterns, DOM scans)
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;