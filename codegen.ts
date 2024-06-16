import type { CodegenConfig } from "@graphql-codegen/cli";
import { pathToFileURL } from "url";

// console.log(__dirname);
// console.log(`${pathToFileURL(__dirname).href}/src/schema.server.ts`);

const config: CodegenConfig = {
  // schema: `./src/schema.server.ts`,
  schema: `${pathToFileURL(__dirname).href}/src/schema.server.ts`,
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
