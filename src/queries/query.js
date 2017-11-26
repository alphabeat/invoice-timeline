import { GraphQLObjectType } from 'graphql';
import knockknock from './Knock.js';
import helloworld from './Hello.js';
import { allInvoices, invoiceDetails } from './Invoices.js';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields() {
    return { knockknock, helloworld, allInvoices, invoiceDetails };
  },
});

export default Query;
