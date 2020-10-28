const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBooks(bookData: BookInput!):User
        removeBooks(bookId: ID!):User
      }
    type User 
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
       
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    input BookInput {
        bookId: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

`;
module.exports = typeDefs;