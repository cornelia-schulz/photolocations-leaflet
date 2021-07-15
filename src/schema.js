const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Location {
    id: ID!,
    title: String,
    label: String,
    lat: Int,
    lng: Int,
    info_title: String,
    info: String,
    type: String
  }

  type Query {
    locations: [Location],
    location(id: Int): Location
  }

  input LocationInput {
    title: String,
    label: String,
    lat: Int,
    lng: Int,
    info_title: String,
    info: String
  }

  type Mutation {
    createLocation(location: LocationInput): String
  }
`

module.exports = typeDefs