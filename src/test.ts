import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync, loadFiles } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import path from "path";

// const typeDefs = mergeTypeDefs(
//   loadFilesSync(
//     `${pathToFileURL(__dirname).href}/graphql/schema/types/user.graphql`
//   )
// );

// const typeDefs = await loadFiles(
//   `./graphql/schema/types/user.graphql`
//   // `${pathToFileURL(__dirname).href}/graphql/schema/types/user.graphql`
// );
// console.log(typeDefs);
// const schema = makeExecutableSchema({
//   typeDefs,
// });

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// (async () => {
const typesDefsArray = await loadFiles(
  // `${__dirname}/graphql/schema/types/user.graphql`
  // `${__dirname}/graphql/schema/**/*`
  `${__dirname}/graphql/schema/**/*.ts`
);
// console.log("type defs : ", typesDefsArray[0]);
// console.log(typesDefsArray[0].kind);

// export default schema;

const typeDefs = mergeTypeDefs(
  typesDefsArray
  // loadFilesSync([
  //   path.join(__dirname, "../graphql/schema/**/*"),
  //   // path.join(__dirname, '../../../../../graphql/src/schema/**/*')
  // ])
);
console.log("type defs merged : ", typeDefs["definitions"][0]["fields"]);
// // @ts-ignore
// const resolvers = mergeResolvers(
//   loadFilesSync(path.join(__dirname, "../graphql/resolvers"))
// );

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// export default schema;
