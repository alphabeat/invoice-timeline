const { GraphQLList, GraphQLString } = require('graphql');
const Invoice = require('./../types/InvoiceType.js');
const SqlInvoice = require('./../models').Invoice;
const Payment = require('./../models').Payment;

const allInvoices = {
  type: new GraphQLList(Invoice),
  resolve: () => {
    return SqlInvoice
      .findAll({
        include: [{
          model: Payment,
          as: 'payment',
        }],
      })
      .then(results => results.map(result => result.dataValues));
  }
};

const invoiceDetails = {
  type: Invoice,
  args: { reference: { type: GraphQLString, required: true } },
  resolve: (_ , { reference }) => {
    return SqlInvoice
      .findOne({ where: { reference: reference } })
      .then(results => results);
  }
};

// invoices.find(invoice => invoice.reference === reference);

module.exports = { allInvoices, invoiceDetails };
