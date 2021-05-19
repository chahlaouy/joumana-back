import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let memberSchema = new Schema({
    codeMember: {type:String, default : null},
    firstName : {type:String, default : null},
    lastName : {type:String, default : null},
    profession : {type:String, default : null},
    secteur : {type:String, default : null},
    nationality : {type:String, default : null},
    cin : {type:String, default : null},
    image : {type:String, default : null},
    birthDate : {type:Date, default : null},
    birthPlace : {type:String, default : null},
    sexe: {type:String, default : null},
    email: {type:String, default : null},
    telephone: {type:String, default : null},
    type: {type:String, default : null},
    joiningDate : {type:Date, default : null},
    observation : {type:String, default : null},
    codeStructure: {type:String, default : null},
    codeCommission: {type:String, default : null},
    gouvernerat: {type:String, default : null},
    delegation:{type:String, default : null},

},{timestamps : true
});

// memberSchema.plugin(AutoIncrement, {inc_field: 'codeMember'});
const member = mongoose.model('member', memberSchema);
module.exports = member;