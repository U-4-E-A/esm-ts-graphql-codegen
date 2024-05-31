import { makeExecutableSchema } from "@graphql-tools/schema";

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

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
