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
    saveBook(thoughtText: String!): User
    removeBook(bookId: String!): User
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }


type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
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