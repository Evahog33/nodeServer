const mongoose = require('mongoose')

let DB_URL = 'mongodb://localhost:27017/menuServer'

mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
    console.log('mongodb connect success')
})


const models = {
    base:{
        'name':{ type:String, require:true }
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}