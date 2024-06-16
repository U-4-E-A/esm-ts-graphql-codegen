import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileURLToPath } from "url";
import path from "path";
import { pathToFileURL } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
// console.log("__filename");
const typeDefs = mergeTypeDefs(
  await loadFiles(`${DIR_NAME}/graphql/schema/**/*`)
);

// const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, '../graphql/resolvers')))
const resolvers = mergeResolvers(
  await loadFiles(`${DIR_NAME}/graphql/resolvers/**/*`)
);

// console.log(typeDefs);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
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
