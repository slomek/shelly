"use strict";
const express = require('express');
const path = require('path');
const fs = require('fs');

const modeler = require('./lib/modeler'),
    servicer = require('./lib/servicer'),
    routerer = require('./lib/routerer');

module.exports = function(pathDir) {
    let absPathDir = path.resolve(pathDir);
    let modelFiles = fs.readdirSync(pathDir);
    let router = express.Router();

    modelFiles.forEach(function(filename){
        let parts = filename.split(/_|\./);

        let def = {
            name: parts[1],
            category: parts[0],
            schemaPath: `${pathDir}/${filename}`
        };

        let M = modeler.makeModel(def);
        let S = servicer.makeService(M);
        let R = routerer.makeRouter(S);

        router.use(`/${def.category}/${def.name}`, R);
    });

    return router;
};
