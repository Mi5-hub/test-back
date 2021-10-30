const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true,
        unique:true
    },
    lastname: {
        type: String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    date_nassaince: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    sexe:{
        type:String,
        default:"",
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema);