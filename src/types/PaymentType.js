import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const Payment = new GraphQLObjectType({
  name: 'Payment',
  description: 'Payment model',
  fields: {
    reference: {type: GraphQLString},
    paid_at: {type: GraphQLString},
    method: {type: GraphQLString},
    wallet_name: {type: GraphQLString},
    wallet_id: {type: GraphQLString}
  }
});

export default Payment;
