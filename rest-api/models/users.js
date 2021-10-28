const moongose = require("mongoose")
const {Schema} = moongose

const schema = new Schema({
    firstName:{
        type:String,
        required:false,
        trim:true,
        maxlength:20,
        minlength:1,
    },
    lastName:{
        type:String,
        required:false,
        trim:true,
        maxlength:20,
        minlength:1,

    },
    userName:{
        type:String,
        required:false,
        trim:true,
        maxlength:50,
        minlength:1,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        minlength:1,
    }
})

module.exports ={
    model:moongose.model("User",schema),
    schema,
}