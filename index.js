const express = require("express");
const schema = require("./Schemas");
const app = express();
const PORT = 8000;

const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log("server running at http://localhost:8000/graphql");
});
