const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema");
const root = require("./resolvers");

const app = express();

app.all("/graphql", createHandler({ schema, rootValue: root }));

app.listen(4000, () => {
  console.log("Express GraphQL server ready at http://localhost:4000/graphql");
});
