import gql from "graphql-tag";

// // test export
// export default `{
//     hero {
//       name
//       appearsIn
//     }
//   }`;

export default `
  enum hero {
    name
    appearsIn
  }
`;

// export const typeDefs = gql`
//   enum hero {
//     name
//     appearsIn
//   }

//   # extend type Query {
//   #   isLoggedIn_____________: User!
//   #   cartItems: [ID!]!
//   # }

//   # extend type Launch {
//   #   isInCart: Boolean!
//   # }

//   # extend type Mutation {
//   #   addOrRemoveFromCart(id: ID!): [ID!]!
//   # }
// `;
