import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class WelcomeQuery {
  @Field()
  hello: string;
}

export default WelcomeQuery;
