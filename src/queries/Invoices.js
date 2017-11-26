import { GraphQLList, GraphQLString } from 'graphql';
import Invoice from './../types/InvoiceType.js';

const invoices = [
  {reference: "56722", amount: "13530", status: "paid", paid_at: new Date(), due_at: "", customer: "Aircall", created_at: new Date()},
  {reference: "56723", amount: "10320", status: "due", paid_at: "", due_at: new Date(), customer: "Aircall", created_at: new Date()},
  {reference: "56724", amount: "5289", status: "due", paid_at: "", due_at: new Date(), customer: "Aircall", created_at: new Date()}
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

export { allInvoices, invoiceDetails };
