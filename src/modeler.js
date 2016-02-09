import mongoose from 'mongoose';

let Schema = mongoose.Schema;

function makeModel(definition) {
    let schema = require(definition.schemaPath);
    return mongoose.model(definition.name, new Schema(schema));
}

export default {makeModel};
