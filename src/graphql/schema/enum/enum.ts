import gql from "graphql-tag";

// // test export
// export default `{
//     hero {
//       name
//       appearsIn
//     }
//   }`;

// export const typeDefs = `{
//   hero {
//     name
//     appearsIn
//   }
// }`;

export const typeDefs = gql`
  extend type Query {
    isLoggedIn_____________: Boolean!
    cartItems: [ID!]!
  }

  extend type Launch {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;
