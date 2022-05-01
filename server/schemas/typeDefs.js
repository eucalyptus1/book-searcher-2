const { gql } = require('apollo-server-express');


const typeDefs = gql`
type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }

type removeBook {

  }  

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks:
  }

type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: 
    link:
  }

type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;