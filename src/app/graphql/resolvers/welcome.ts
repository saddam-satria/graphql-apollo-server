import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Hello from '../mutation/hello';
import WelcomeQuery from '../query/welcome';

@Resolver()
class Welcome {
  @Query(() => WelcomeQuery)
  welcome() {
    return {
      hello: 'Hello World',
    };
  }
  @Mutation(() => WelcomeQuery)
  hello(@Arg('input') input: Hello) {
    return {
      hello: `Hello ${input.name}`,
    };
  }
}

export default Welcome;
