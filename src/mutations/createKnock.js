const { GraphQLString, GraphQLBoolean } = require('graphql');
const Knock = require('./../types/KnockType.js');

const CreateKnock = {
  type: Knock,
  args: { isHome: { type: GraphQLBoolean } },
  resolve(root, args, context) {
    return 'Walking to the door!';
  },
};

module.exports = CreateKnock;
