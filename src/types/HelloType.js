import { GraphQLObjectType, GraphQLString } from 'graphql';

const Hello = new GraphQLObjectType({
  name: 'Hello',
  description: 'Helloworld to say hello.',
  fields() {
    return {
      hello: {
        type: GraphQLString,
        resolve(hello) {
          return hello;
        },
      },
    };
  },
});

export default Hello;
