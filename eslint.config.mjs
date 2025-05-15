import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Spread the configurations from next/core-web-vitals and a potential custom Next.js TypeScript config
  // It's common to extend 'next/core-web-vitals' which itself includes TypeScript rules if applicable.
  // If you specifically had "next/typescript", ensure it's a valid sharable config or adjust as needed.
  // For disabling rules, it's often cleaner to apply them after extending.
  ...compat.extends("next/core-web-vitals"), // next/core-web-vitals usually includes relevant TypeScript rules

  // Add an object to specify your custom rule overrides
  {
    rules: {
      "react/no-unescaped-entities": "off", // Or 0
      "@typescript-eslint/no-unused-vars": "off", // Or 0
    },
  },
];

export default eslintConfig;
