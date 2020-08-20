// const Express = require('express');
const GraphQ = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const TagModel = mongoose.model("tags", {
    BeaconAddress: String,
    RepeaterAddress: String,
    RSSI: String
});

const TagInfo = new GraphQLObjectType({
    name: "tags",
    fields: {
        id: { type: GraphQLID },
        BeaconAddress: { type: GraphQLString },
        RepeaterAddress: { type: GraphQLString },
        RSSI: { type: GraphQLString }
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            single: {
                type: GraphQLList(TagInfo),
                resolve: (root, args, context, info) => {
                    return TagModel.find().exec();
                }
            },
            multiple: {
                type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TagInfo))),
                args: {
                    BeaconAddress: { type: GraphQLNonNull(GraphQLString)}
                },
                resolve: (root, args, context, info) => {
                    return TagModel.find(args.BeaconAddress.arrayListItem).exec();
            }
        }}
    })
});

module.exports = {GraphQ , schema};
