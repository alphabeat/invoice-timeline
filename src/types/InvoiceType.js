const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLFloat } = require('graphql');
const Payment = require('./PaymentType');
const Comment = require('./CommentType');

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
    payment: {type: Payment},
    comments: {type: new GraphQLList(Comment)}
  }
});

module.exports = Invoice;
