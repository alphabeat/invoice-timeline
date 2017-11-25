import { GraphQLObjectType } from 'graphql';
import knockknock from './Knock.js';
import helloworld from './Hello.js';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields() {
    return { knockknock, helloworld };
  },
});

export default Query;
