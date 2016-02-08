"use strict";
const express = require('express');

function makeRouter(S) {
    function handleError(error, res, message) {
        res.status(500).send({error: message});
    }

    let router = express.Router()

    router.get('', (req, res) => {

        console.log('loading all');

        S.getAll()
            .then((posts)=>res.json(posts))
            .catch((err) => handleError(err, res, 'Failed to load posts'));
    });

    router.get('/:id', (req, res) => {
        let id = req.params.id;

        S.getById(id)
            .then((post) => res.json(post))
            .catch((err) => handleError(err, res, 'Failed to load post'));
    });

    router.post('', (req, res) => {
        let post = req.body;

        S.save(post)
            .then(() => res.json({id: post.id}))
            .catch((err) => handleError(err, res, 'Failed to save post'));
    });

    router.delete('/:id', (req, res) => {
        let id = req.params.id;

        S.remove(id)
            .then(() => res.json({id}))
            .catch((err) => handleError(err, res, 'Failed to delete post'));
    });

    return router;
};

module.exports = {makeRouter};
