import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import Payment from './PaymentType';

const Invoice = new GraphQLObjectType({
  name: 'Invoice',
  description: 'Invoice model',
  fields: {
    reference: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    status: {type: GraphQLString},
    due_at: {type: GraphQLString},
    customer: {type: GraphQLString},
    created_at: {type: GraphQLString},
    payment: {type: Payment}
  }
});

export default Invoice;
