import { Field, InputType } from 'type-graphql';

@InputType()
class Hello {
  @Field()
  name: string;
}

export default Hello;
