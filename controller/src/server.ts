require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './schema/schema';

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
