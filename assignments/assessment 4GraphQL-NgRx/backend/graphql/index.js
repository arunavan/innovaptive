const fs = require("fs");
const mutations = require("./mutations");
const queries = require("./queries");

const resolvers = {
    Query: queries,
    Mutation: mutations,
};

module.exports = {
    typeDefs: fs.readFileSync("./graphql/schema.graphql", {
        encoding: "utf-8",
    }),
    resolver: resolvers,
};
