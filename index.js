"use strict";
const express = require('express');
const path = require('path');

const modeler = require('./lib/modeler'),
    servicer = require('./lib/servicer'),
    routerer = require('./lib/routerer');

module.exports = function(filepath) {
    let filename = path.basename(filepath),
        parts = filename.split(/_|\./);

    let def = {
        name: parts[1],
        category: parts[0],
        schemaPath: filepath
    };

    console.log(def);

    let M = modeler.makeModel(def);
    let S = servicer.makeService(M);
    let R = routerer.makeRouter(S);

    let router = express.Router();
    router.use(`/${def.category}/${def.name}`, R);

    return router;
};
