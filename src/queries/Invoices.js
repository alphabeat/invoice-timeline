import { GraphQLList } from 'graphql';
import Invoice from './../types/InvoiceType.js';

const invoices = [
  {reference: "56722", amount: "13530", status: "paid", paid_at: new Date(), due_at: "", phone: "0102030405", created_at: new Date()},
  {reference: "56723", amount: "10320", status: "due", paid_at: "", due_at: new Date(), phone: "0102030405", created_at: new Date()}
];

const allInvoices = {
  type: new GraphQLList(Invoice),
  resolve: () => {
    return invoices;
  }
};

export default allInvoices;
