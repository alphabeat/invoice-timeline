import { GraphQLObjectType, GraphQLString } from 'graphql';

const Comment = new GraphQLObjectType({
  name: 'Comment',
  description: 'Comment model',
  fields: {
    author: {type: GraphQLString},
    message: {type: GraphQLString},
    created_at: {type: GraphQLString}
  }
});

export default Comment;
