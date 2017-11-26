const { GraphQLString } = require('graphql');
const Hello = require('./../types/HelloType.js');

const helloworld = {
  type: Hello,
  args: { hello: { type: GraphQLString } },
  resolve() {
    return 'Waddup fam!';
  },
};

module.exports = helloworld;
