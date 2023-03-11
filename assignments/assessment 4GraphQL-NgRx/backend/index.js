const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const { default: mongoose } = require("mongoose");
const dbConfig = require("./config/database.config");
const { ApolloServer } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { PubSub } = require("graphql-subscriptions");
const { typeDefs, resolver } = require("./graphql");

const pubsub = new PubSub();

const SubscriptionResolvers = {
    Subscription: {
        todo: {
            subscribe: () => pubsub.asyncIterator("todo"),
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers: [resolver, SubscriptionResolvers],
    context: ({ req, connection }) => {
        if (connection) {
            return { pubsub };
        } else {
            return { req, pubsub };
        }
    },
});

async function startServer() {
    await server.start();

    // Create a new instance of Express
    const app = express();
    app.use(cors());
    app.use(bodyParser());

    // Apply the Apollo middleware to the Express app
    server.applyMiddleware({ app });

    // Create an HTTP server instance
    const httpServer = http.createServer(app);

    // Create a Schema
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers: [resolver, SubscriptionResolvers],
    });

    // Start the mongoose server
    mongoose
        .connect(dbConfig.url, {})
        .then(() => {
            console.log("Connected to mongodb successfully");

            // Start the server
            httpServer.listen({ port: 4000 }, (err) => {
                if (err) {
                    console.log("unable to start the server");
                    console.log(err);
                    process.exit();
                }
                console.log(
                    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
                );

                // Create a Subscription Server instance
                new SubscriptionServer(
                    {
                        execute,
                        subscribe,
                        schema: schema,
                        onConnect: () => console.log("Connected to websocket"),
                    },
                    {
                        server: httpServer,
                        path: server.graphqlPath,
                    }
                );
            });
        })
        .catch((err) => {
            console.log("failed connecting to mongodb");
            console.log(err);
            process.exit();
        });
}

startServer();
