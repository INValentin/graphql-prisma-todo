import { ApolloServer } from '@apollo/server';

import { startStandaloneServer } from '@apollo/server/standalone';
import { Context, createContext } from './db';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const start = async () => {
  const server = new ApolloServer<Context>({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: (process.env.PORT as number | undefined) ?? 3001 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

start();
// import express, { Application, Request, Response } from 'express';

// const PORT = process.env.PORT || 3001;

// const app: Application = express();

// app.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'Hello, World!' });
// });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
