"use strict";
let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function makeModel(definition) {
    let schema = require(definition.schemaPath);
    console.log('schema', schema);
    return mongoose.model(definition.name, new Schema(schema));
}

module.exports = {makeModel};
