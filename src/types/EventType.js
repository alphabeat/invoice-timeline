import { GraphQLUnionType, GraphQLString } from 'graphql';
import Comment from './CommentType';

const Event = new GraphQLUnionType({
  name: 'Event',
  description: 'Event model',
  types: [ Comment ],
  resolveType(value) {
    if (value instanceof Comment) {
      return Comment;
    }
  }
});

export default Event;
