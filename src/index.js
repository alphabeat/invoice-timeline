import micro from 'micro';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema.js';

const CORS = require('micro-cors')();

exports.default = CORS(graphqlHTTP({ schema: Schema, pretty: true, graphiql: true }));
