const { GraphQLObjectType } = require('graphql');
const CreateKnock = require('./createKnock.js');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return { CreateKnock };
  },
});

module.exports = Mutation;
