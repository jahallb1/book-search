const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { model } = require('../models/User');

const resolvers = {
    Query: {},

    Mutation: {}
}

module.exports = resolvers;