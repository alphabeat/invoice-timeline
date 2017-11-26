const { GraphQLObjectType } = require('graphql');
const knockknock = require('./Knock.js');
const helloworld = require('./Hello.js');
const { allInvoices, invoiceDetails } = require('./Invoices.js');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields() {
    return { knockknock, helloworld, allInvoices, invoiceDetails };
  },
});

module.exports = Query;
