const mutation = {
  logoutUser: async (_: any, __: any, { logoutUser }: any): Promise<any> => {
    //
  },
};

const query = {
  user: async (
    _: any,
    { id: string },
    { currentUser, confirmCurrentUser, db }: any
  ) => {
    //
  },
};

export default {
  Mutation: mutation,
  Query: query,
};
