const express    = require('express');
const bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');
const Data = require('./data')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressMongoDb('mongodb://127.0.0.1:27017/TestDBV1'));

//get value from form api
app.post('/', function (req, res) {
    console.log(req.body.name)
    res.send('data captured');
})

//get db connection through form
app.get('/', function (req, res, next) {
    console.log(req.db)
    connect = req.db
});

app.listen(3000)




