const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require('graphql');

const Payment = new GraphQLObjectType({
  name: 'Payment',
  description: 'Payment model',
  fields: {
    reference: {type: GraphQLString},
    paidAt: {type: GraphQLString},
    method: {type: GraphQLString},
    walletName: {type: GraphQLString},
    walletId: {type: GraphQLString}
  }
});

module.exports = Payment;
