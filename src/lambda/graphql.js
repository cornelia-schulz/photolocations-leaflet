require('encoding')
const { ApolloServer } = require("apollo-server-lambda")
const typeDefs = require('../schema')
const resolvers = require('../resolvers')

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `

// const resolvers = {
//   Query: {
//     hello: (root, args, context) => {
//       return "Hello, world!";
//     }
//   }
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

exports.handler = server.createHandler()