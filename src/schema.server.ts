import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileURLToPath } from "url";
import path from "path";
import { pathToFileURL } from "url";

// const typesArray = loadFilesSync(
//   `${pathToFileURL(__dirname).href}/graphql/schema/**/*`
// );
// console.log("typesArray : ", typesArray);

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// console.log("__filename");
const typeDefs = mergeTypeDefs(
  loadFilesSync(
    `${pathToFileURL(__dirname).href}/src/graphql/schema/types/user.ts`
  )
  // loadFilesSync(`./src/graphql/schema/**/*`)
  // loadFilesSync(`${__dirname}/graphql/schema/**/*`)
  // loadFilesSync(`${pathToFileURL(__dirname).href}/graphql/schema/**/*`)
  // loadFilesSync(`file://${__dirname}/graphql/schema/**/*`)
  // loadFilesSync(typesArray)
);
console.log(typeDefs);
const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;

// const typeDefs = mergeTypeDefs(
//   loadFilesSync([
//     path.join(__dirname, "../graphql/schema/**/*"),
//     // path.join(__dirname, '../../../../../graphql/src/schema/**/*')
//   ])
// );
// // @ts-ignore
// const resolvers = mergeResolvers(
//   loadFilesSync(path.join(__dirname, "../graphql/resolvers"))
// );

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// export default schema;
