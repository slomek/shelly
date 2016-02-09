var express = require('express'),
    mongoose = require('mongoose');

var shelly = require('../lib');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('localhost/shelly_test');
app.use('', shelly('./test/models'));

module.exports = app;

app.listen(8000);

















var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8888");

// UNIT test begin

describe("SAMPLE unit test",function() {

    var appServer;

    beforeEach(function() {
        appServer = app.listen(8888);
    })

    afterEach(function() {
        appServer.close();
    })

    it("should add two number", function (done) {

        server
            .post('/cat/model')
            .send({name: 'aaa', value: 20})
            .expect("Content-type", /json/)
            .end(function ( res) {
                //res.status.should.equal(200);
                res.body.error.should.equal(false);
                res.body.data.should.equal(30);

                server
                    .get('/cat/model')
                    .expect("Content-type", /json/)
                    .expect(200)
                    .end(function (err, req, res) {
                        console.log('arguments', arguments);
                        done();
                    });

            });



    });

});























//var reqwest = require('reqwest');
////reqwest({
////    url: `http://localhost:8000/cat/model`,
////    method: 'POST',
////    form: {name: 'ppp', value: 123},
////    type: 'json'
////})
//    //.then(() => {
//    //    reqwest({
//    //        url: `http://localhost:8000/cat/model`,
//    //        type: 'json'
//    //    })
//    //})
//    //.then(logArgs('resp'), logArgs('err'));
//
//reqwest({
//    url: `http://localhost:8000/cat/model`,
//    type: 'json'
//})
//.then(logArgs('resp'), logArgs('err'));
//try {
//    frisby.create('Very useful for HTML, text, or raw output')
//        .get('asciime.heroku.com/generate_ascii?s=Frisby.js')
//        .inspectBody()
//        .toss()
//} catch(err) {
//    console.log('err', err);
//}
