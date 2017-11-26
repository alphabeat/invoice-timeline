const { GraphQLString } = require('graphql');
const Knock = require('./../types/KnockType.js');

const knockknock = {
  type: Knock,
  args: { knock: { type: GraphQLString } },
  resolve() {
    return 'Waddup fam!';
  },
};

module.exports = knockknock;
