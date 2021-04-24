import  structerModel  from "./structerModel";

class Structer {

} 

Structer.prototype.getStructers = (req,res) => {
    structerModel.find({},(err,structers) => {
        if(err){
            res.send(err);
        }else{
            console.log("result Structers", structers);
            res.send({'success':true,'message':'Structers fetched successfully',structers});
        }
    })
}

Structer.prototype.getStructerById = (req,res) => {
    let id = req.params.id;
    StructerModel.findById(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Structer.prototype.getStructerByCustomId = (req,res) => {
    let id = req.body.id;
    structerModel.findOne({customerId : id},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Structer fetched successfully',result});
        }
    })
}

Structer.prototype.addStructer = (req,res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new structerModel(obj);
console.log("model ", model);
    model.save((err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Structer fetched successfully',result});
        }
    })
}

Structer.prototype.updateStructerById = (req,res) => {
    let id = req.body._id;
    structerModel.findByIdAndUpdate(id,{ 
        CodeStruct : req.body.CodeStruct,
        CodeDirEx: req.body.CodeDirEx,
        CodePresident: req.body.CodePresident,
        CodeTresor: req.body.CodeTresor,
        CodeVicePresident: req.body.CodeVicePresident,
        DateCrea: req.body.DateCrea,
        DelegStruct: req.body.DelegStruct,
        GouvStruct: req.body.GouvStruct,
        JortCreation: req.body.JortCreation,
        MatriFisc: req.body.MatriFisc,
        Numccptebq: req.body.Numccptebq,
        codeMembreBur: req.body.codeMembreBur,
        nomDirEx: req.body.nomDirEx,
        nomMembreBureau: req.body.nomMembreBureau,
        nomPresident: req.body.nomPresident,
        nomTresor: req.body.nomTresor,
        nomVice: req.body.nomVice,
        TypeStruct: req.body.TypeStruct,
    },
        (err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Structer.prototype.deleteStructerById = (req,res) => {
    let id = req.body._id;
    console.log("delete Structer ", req.body);
    structerModel.findByIdAndRemove(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = Structer;
