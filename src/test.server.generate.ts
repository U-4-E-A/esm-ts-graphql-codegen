import { generate } from "@graphql-codegen/cli";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileURLToPath } from "url";
import path from "path";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

// https://github.com/ardatan/graphql-tools/issues/1750#issuecomment-655828240
const typeDefs = mergeTypeDefs(
  await loadFiles(`${DIR_NAME}/graphql/schema/**/*`)
);

// const resolvers = mergeResolvers(
//   await loadFiles(`${DIR_NAME}/graphql/resolvers/**/*`)
// );

const schema = makeExecutableSchema({
  typeDefs,
  // resolvers,
});

async function doSomething() {
  const generatedFiles = await generate(
    {
      schema: schema,
      // documents: "./src/**/*.graphql",
      documents: [`./graphql/documents/user.mutations.graphql`],
      generates: {
        [process.cwd() + `/src/types/codegen.ts`]: {
          plugins: ["typescript"],
        },
      },
    },
    true
  );
}

doSomething();
