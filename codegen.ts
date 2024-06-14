import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: `./src/schema.server.ts`,
  schema: `file:///${__dirname}/src/schema.server.ts`,
  // schema: `file://C:/dev/esm-ts-graphql-codegen/src/schema.server.ts`,
  // emitLegacyCommonJSImports: false,
  // require: ["ts-node/register/transpile-only", "tsconfig-paths/register.js"],
  // generates: {
  //   "./src/types/schema.json": {
  //     plugins: ["introspection"],
  //   },
  // },
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
