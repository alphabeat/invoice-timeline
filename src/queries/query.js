import { GraphQLObjectType } from 'graphql';
import knockknock from './Knock.js';
import helloworld from './Hello.js';
import allInvoices from './Invoices.js';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields() {
    return { knockknock, helloworld, allInvoices };
  },
});

export default Query;
