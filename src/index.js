import express from 'express';
import path from 'path';
import fs from 'fs';

import modeler from './modeler';
import servicer from './servicer';
import routerer from './routerer';

function init(pathDir) {
    let fullPath = path.resolve(pathDir),
        modelFiles = fs.readdirSync(pathDir);

    let router = express.Router();

    modelFiles.forEach(function(filename){
        let [category, name] = filename.split(/_|\./);

        let def = {category, name, fullPath};

        let M = modeler.makeModel(def);
        let S = servicer.makeService(M);
        let R = routerer.makeRouter(S);

        router.use(`/${def.category}/${def.name}`, R);
    });

    return router;
}

export default init;
