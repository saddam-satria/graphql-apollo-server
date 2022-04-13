import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/config/router';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './app/graphql/schema';

(async () => {
  dotenv.config();
  const app = express();
  const PORT: undefined | string | number = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
  app.use('/static', express.static(path.join(__dirname, '../public')));

  const apolloMiddleware = new ApolloServer({
    schema: await schema(),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloMiddleware.start();
  apolloMiddleware.applyMiddleware({ app, path: '/graphql' });

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
})();
