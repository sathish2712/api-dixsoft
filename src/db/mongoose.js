const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/productsDb' , {
    useNewUrlParser : true,
    useCreateIndex : true
})
