const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

// Root Types: Query, Mutation, Subscription

// Type Definitions
// Also known as GraphQL schema
const typeDefs = `
type Query {
    characters: [Character!]!
}

type Mutation {
    post (name: String!, species: String!, affiliation: affiliation!, weapon: String!): Character!
}

type Character {
    name: String!,
    species: String!,
    affiliation: affiliation!,
    weapon: String!
}


enum affiliation {
    REBEL_ALLIANCE,
    EMPIRE
}

`;

// Resolvers
const resolvers = {
  Query: {
    characters: (root, args, context, info) => {
      return context.prisma.characters();
    },
  },

  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createCharacter({
        name: args.name,
        species: args.species,
        affiliation: args.affiliation,
        weapon: args.weapon,
      });
    },
  },
};

// Server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
