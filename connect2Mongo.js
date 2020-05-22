const mongodb = require('mongodb').MongoClient

const mongoURL = 'mongodb://127.0.0.1:27017'
const dbName = 'TestDBV1'

const dbURL = mongoURL + '/' + dbName

var doc = { name: "USER1", age: "100" }

mongodb.connect(dbURL, function(error, connectMDB) {
   if (error) {
    console.log('failed to connect')
   }

    connectMDB.collection('Name').insertOne(doc, function(error, res) {
        console.log('insert doen')
    })

    //close connection to DB
    connectMDB.close()
    })