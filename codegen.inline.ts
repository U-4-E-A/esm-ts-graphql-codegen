import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `./src/schema.server.inline.ts`,
  emitLegacyCommonJSImports: false,
  require: ["tsx/esm", "tsconfig-paths/register.js"],
  generates: {
    [`./src/types/schema.json`]: {
      plugins: ["introspection"],
    },
  },
  verbose: true,
  overwrite: true,
};

export default config;
