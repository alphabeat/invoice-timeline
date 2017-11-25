import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const Invoice = new GraphQLObjectType({
  name: 'Invoice',
  description: 'Invoice model',
  fields: {
    reference: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    status: {type: GraphQLString},
    paid_at: {type: GraphQLString},
    due_at: {type: GraphQLString},
    customer: {type: GraphQLString},
    created_at: {type: GraphQLString}
  }
});

export default Invoice;
