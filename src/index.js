const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const product = require('./models/productModel')
const app = express()
const port = 8080
app.use(express.json())
app.use(cors())
const mgs = {
    success : "",
    message : ""
}
const jsonResponse = {
    data : [],
    success : 1
}

app.post('/products/save' , (req , res) => { 
    const prod = new product(req.query)
    prod.save().then(() => {
        mgs.success = 1
        mgs.message = "product Successfully created"
        res.send(JSON.stringify(mgs))
    }).catch((error) => {
        res.send(error)
    })
})
app.get('/products/get' , (req , res) => {
    product.find({ prod_name : {$regex: req.query.prod_name , $options:"$i"}}).then((prod) => {
        jsonResponse.data = prod
        if(jsonResponse.data.length === 0){
            mgs.success = 2
            mgs.message = "No Products found!"
            return res.send(JSON.stringify(mgs))
        }
        res.send(jsonResponse)
    }).catch((error) => {
        res.send(error)
    })
})
app.listen(port , () => {
    console.log('Server is up on port ' + port)
})