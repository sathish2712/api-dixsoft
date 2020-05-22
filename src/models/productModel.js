const mongoose = require('mongoose')

const products = mongoose.model('products' , {
    prod_name : {
        type : String,
        required : true
    },
    unit_cost : {
        type : Number,
        required: true
    
    }
})

module.exports = products