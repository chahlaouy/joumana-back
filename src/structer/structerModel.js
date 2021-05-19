import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let structerSchema = new Schema({
    CodeStruct : {type:String, default : null},
    GouvStruct: {type:String, default : null},
    DelegStruct : {type:String, default : null},
    DateCrea: {type:Date, default : null},
    TypeStruct : {type:String, default : null},
    MatriFisc : {type:String, default : null},
    JortCreation : {type:String, default : null},
    Numccptebq : {type:String, default : null},
    CodePresident: {type:String, default : null},
    CodeVicePresident: {type:String, default : null},
    CodeDirEx: {type:String, default : null},
    CodeTresor: {type:String, default : null},
    codeMembreBur: {type:String, default : null},
    nomPresident: {type:String, default : null},
    nomVice: {type:String, default : null},
    nomDirEx: {type:String, default : null},
    nomTresor: {type:String, default : null},
    nomMembreBureau: {type:String, default : null},
    SectorStruct: {type:String, default : null},
},{timestamps : true
});

structerSchema.plugin(AutoIncrement, {inc_field: 'codeStructer'});
const structer = mongoose.model('structer', structerSchema);
module.exports = structer ;