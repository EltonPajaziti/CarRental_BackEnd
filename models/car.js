const mongoose= require('mongoose');

const Car= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price_per_day:{
        type:Number,
        required:true,
        min:0
    },
    year:{
        type:Number,
        required:true,
        min:0
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    steering_type:{
        type:String,
        required:true,
        enum:["automatic", "manual"] //Sepse vetem 2 llojesh mund te jete vetura  per ate e perdorim ENUM
    },
    number_of_seats:{
        type:Number,
        required:true,
        min:1
    }
});


const vetura=mongoose.model("car",Car);


module.exports=vetura;