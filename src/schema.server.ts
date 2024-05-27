import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = mergeTypeDefs(
  loadFilesSync(`${__dirname}/graphql/schema/**/*`)
);

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
