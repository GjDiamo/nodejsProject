'use strict'
let mongoose = require('mongoose');
let schema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    fav: [String]
}, {
    versionKey: false
}
);

module.exports = mongoose.model("users", schema);

