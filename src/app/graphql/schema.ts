import { buildSchema } from 'type-graphql';
import WelcomeResolver from './resolvers/welcome';

export default async () => {
  return await buildSchema({
    resolvers: [WelcomeResolver],
  });
};
