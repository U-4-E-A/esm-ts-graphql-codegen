import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync, loadFiles } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import path from "path";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// (async () => {
// const typesDefsArray = await loadFiles(
//   // `${__dirname}/graphql/schema/types/user.graphql`
//   // `${__dirname}/graphql/schema/**/*.{ts}`
//   `${__dirname}/graphql/schema/**/*`
//   // `${__dirname}/graphql/schema/**/*`
//   // `${__dirname}/graphql/schema/**/*.{ts,graphql}`
// );

// https://github.com/ardatan/graphql-tools/issues/1750#issuecomment-655828240
const typeDefs = mergeTypeDefs(
  await loadFiles(`${__dirname}/graphql/schema/**/*`)
);
// console.log("type defs merged : ", typeDefs["definitions"][3]["fields"]);

const schema = makeExecutableSchema({
  typeDefs,
  // resolvers,
});
console.log(schema);
// export default schema;
