import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }

  input SumInput {
    a: Float!
    b: Float!
  }

  type Mutation {
    echoString(str: String!): String!
    calculateSum(input: SumInput!): Float!
  }
`;

const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "../graphql/resolvers"))
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
