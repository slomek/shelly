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
app.use('', shelly('./models'));

module.exports = app;

app.listen(8000);

function logArgs(pref) {
    return function() {
        console.log(pref, arguments);
    }
}

var reqwest = require('reqwest');
//reqwest({
//    url: `http://localhost:8000/cat/model`,
//    method: 'POST',
//    form: {name: 'ppp', value: 123},
//    type: 'json'
//})
    //.then(() => {
    //    reqwest({
    //        url: `http://localhost:8000/cat/model`,
    //        type: 'json'
    //    })
    //})
    //.then(logArgs('resp'), logArgs('err'));

reqwest({
    url: `http://localhost:8000/cat/model`,
    type: 'json'
})
.then(logArgs('resp'), logArgs('err'));
