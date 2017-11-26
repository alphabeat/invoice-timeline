const graphqlHTTP = require('express-graphql');
const CORS = require('micro-cors')();
const Schema = require('./schema/schema.js');

module.exports = CORS(graphqlHTTP({ schema: Schema }));
