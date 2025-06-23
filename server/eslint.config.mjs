import js from "@eslint/js";
import globals from "globals";

import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    plugins: { import: importPlugin },
    rules: {
      "import/no-unresolved": "error",
      "import/order": ["warn", { "newlines-between": "always" }],
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: { project: "./tsconfig.json" },
      },
    },
  },

  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: { project: "./tsconfig.json" },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin,
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  { ignores: ["eslint.config.*"] },
];
