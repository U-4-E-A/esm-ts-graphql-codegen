export const typeDefs = /* GraphQL */ `
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
