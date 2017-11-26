const { GraphQLObjectType, GraphQLString } = require('graphql');

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

module.exports = Hello;
