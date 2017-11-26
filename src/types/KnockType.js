const { GraphQLObjectType, GraphQLString } = require('graphql');

const Knock = new GraphQLObjectType({
  name: 'Knock',
  description: 'KnockKnock to say hello.',
  fields() {
    return {
      knock: {
        type: GraphQLString,
        resolve(knock) {
          return knock;
        },
      },
    };
  },
});

module.exports = Knock;
