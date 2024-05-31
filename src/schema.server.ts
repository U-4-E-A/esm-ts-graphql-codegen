import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const typeDefs = mergeTypeDefs(
  // loadFilesSync(`./graphql/schema/**/*`)
  // loadFilesSync(`${__dirname}/graphql/schema/**/*`)
  loadFilesSync(`file:///${__dirname}/graphql/schema/**/*`)
);

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
