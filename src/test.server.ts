import { codegen } from "@graphql-codegen/core";
// import { type CodegenConfig } from "@graphql-codegen/cli";
import fs from "fs";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileURLToPath } from "url";
import path from "path";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import * as typescriptResolversPlugin from "@graphql-codegen/typescript-resolvers";
import * as addPlugin from "@graphql-codegen/add";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

// https://github.com/ardatan/graphql-tools/issues/1750#issuecomment-655828240
const typeDefs = mergeTypeDefs(
  await loadFiles(`${DIR_NAME}/graphql/schema/**/*`)
);

const resolvers = mergeResolvers(
  await loadFiles(`${DIR_NAME}/graphql/resolvers/**/*`)
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// const schema: GraphQLSchema = buildSchema(`type A { name: String }`);
const outputFile = "relative/pathTo/filename.ts";
const config = {
  documents: [],
  config: { enumsAsConst: true, typesSuffix: "Type" },
  // used by a plugin internally, although the 'typescript' plugin currently
  // returns the string output, rather than writing to a file
  // filename: outputFile,
  schema: schema,
  plugins: [
    // Each plugin should be an object
    {
      typescript: {}, // Here you can pass configuration to the plugin
    },
    {
      add: {
        content:
          "/* eslint-disable no-redeclare, @typescript-eslint/explicit-function-return-type */ // @typescript-eslint/explicit-function-return-type",
      },
    },
    {
      "typescript-resolvers": {},
    },
  ],
  pluginMap: {
    typescript: typescriptPlugin,
    "typescript-resolvers": typescriptResolversPlugin,
    add: addPlugin,
  },
};

const output = await codegen(config);
await fs.writeFile(`./src/types/server.types.ts`, output, () => {});
console.log("Outputs generated!");
