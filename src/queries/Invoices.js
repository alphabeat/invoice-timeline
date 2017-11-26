const { GraphQLList, GraphQLString } = require('graphql');
const Invoice = require('./../types/InvoiceType.js');

const invoices = [
  {
    reference: "56722", amount: "13530", status: "paid", due_at: new Date(), customer: "Aircall", created_at: new Date(),
    payment: {reference: "123578", paid_at: new Date(), method: "WireTransfer", wallet_name: "Wallet Euro", wallet_id: "1ac91f5e-1787-4a57-b877-d2b1cdb3b0da"},
    comments: [
      {author: "jkilo", message: "Test", created_at: new Date()},
      {author: "jkilo", message: "Test 2", created_at: new Date()},
    ]
  },
  {
    reference: "56723", amount: "10320", status: "due", due_at: new Date(), customer: "Aircall", created_at: new Date(),
    payment: null
  },
  {
    reference: "56724", amount: "5289", status: "due", due_at: new Date(), customer: "Aircall", created_at: new Date(),
    payment: null
  }
];

const allInvoices = {
  type: new GraphQLList(Invoice),
  resolve: () => {
    return invoices;
  }
};

const invoiceDetails = {
  type: Invoice,
  args: { reference: { type: GraphQLString, required: true } },
  resolve: (_ , { reference }) => {
    return invoices.find(invoice => invoice.reference === reference);
  }
};

module.exports = { allInvoices, invoiceDetails };
