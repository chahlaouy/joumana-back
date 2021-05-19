import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let userSchema = new Schema({
    id: { type: Number },
    fullName : {type:String, default : null},
    username : {type:String, default : null},
    email : {type:String, default : null},
    password : {type:String, default : null},

},{timestamps : true
});

userSchema.plugin(AutoIncrement, {inc_field: 'id'});
const user = mongoose.model('user', userSchema);
module.exports = user;