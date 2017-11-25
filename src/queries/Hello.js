import { GraphQLString } from 'graphql';
import Hello from './../types/HelloType.js';

const helloworld = {
  type: Hello,
  args: { hello: { type: GraphQLString } },
  resolve() {
    return 'Waddup fam!';
  },
};

export default helloworld;
