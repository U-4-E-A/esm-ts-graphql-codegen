const mutation = {
  logoutUser: async (_: any, __: any, { logoutUser }: any): Promise<any> => {
    //
  },
};

const query = {
  getUser: async (_: any, { currentUser, confirmCurrentUser, db }: any) => {
    //
  },
};

export default {
  Mutation: mutation,
  Query: query,
};
