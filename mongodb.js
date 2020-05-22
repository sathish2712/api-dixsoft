const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'productsDb'

MongoClient.connect(connURL , { useNewUrlParser : true}, (error , client) => { 
    if(error){
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)

    db.collection('products').insertOne({
        prod_name : 'samsung s10+',
        unit_cost : 12000
    })
})