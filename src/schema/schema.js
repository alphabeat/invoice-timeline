const { GraphQLSchema } = require('graphql');
const Query = require('./../queries/query.js');
const Mutation = require('./../mutations/mutation.js');

const Schema = new GraphQLSchema({ query: Query, mutation: Mutation });

module.exports = Schema;
