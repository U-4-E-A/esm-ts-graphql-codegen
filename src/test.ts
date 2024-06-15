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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log(import.meta.url);
  const typesArray = await loadFiles(
    "C:/dev/esm-ts-graphql-codegen/src/graphql/schema/types/user.graphql"
    // path.join(__dirname, "/graphql/schema/types/user.graphql")`
    // ./graphql/schema/types/user.graphql`
    // {
    //   ignoreIndex: true,
    //   requireMethod: async (path) => {
    //     return await import(url.pathToFileURL(path));
    //   },
    // }
  );
  console.log(typesArray[0].kind);
  // const resolvers = mergeResolvers(resolversArray);
  // console.log(util.inspect(resolvers, { depth: null, showHidden: false }));
})();

// export default schema;

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
