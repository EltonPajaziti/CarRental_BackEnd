const mongoose=require('mongoose');

const User=mongoose.Schema({
fullname:{
    type:String,
    required:true,
    trim:true
},

email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
},

username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
},

password:{
    type:String,
    required:true,
    minlength:5
}

});


const useri= mongoose.model("user",User);

module.exports=useri;