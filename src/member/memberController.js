import memberModel from "./memberModel";
var multer = require('multer')

class Member {}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

Member.prototype.getMembers = (req, res) => {
  memberModel.find({}, (err, members) => {
    if (err) {
      res.send(err);
    } else {
      console.log("result members", members);
      res.send({
        success: true,
        message: "Members fetched successfully",
        members,
      });
    }
  });
};

Member.prototype.getMemberById = (req, res) => {
  const search = req.params.id;
  console.log(search)
  memberModel.find({ 
    $or: [{firstName: { $regex: '.*' + search, $options: 'i' }}, {telephone: { $regex: '.*' + search, $options: 'i' }}, {lastName: { $regex: '.*' + search, $options: 'i' }}, {secteur: { $regex: '.*' + search, $options: 'i' }}, {nationality: { $regex: '.*' + search, $options: 'i' }}, {cin: { $regex: '.*' + search, $options: 'i' }}, {codeStructure: { $regex: '.*' + search, $options: 'i' }}, {email: { $regex: '.*' + search, $options: 'i' }}, {gouvernerat: { $regex: '.*' + search, $options: 'i' }}, {delegation: { $regex: '.*' + search, $options: 'i' }}, {sexe: { $regex: '.*' + search, $options: 'i' }}, {profession: { $regex: '.*' + search, $options: 'i' }}],
    }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);}
    })
};

Member.prototype.getMemberByCustomId = (req, res) => {
  let id = req.body.id;
  memberModel.findOne({ customerId: id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        success: true,
        message: "Member fetched successfully",
        result,
      });
    }
  });
};

/** upload image to server */

Member.prototype.upload = (req, res) => {
  
  

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err)
        return res.status(500).json(err)
    } else if (err) {
      console.log(err)
        return res.status(500).json(err)
    }
  return res.status(200).send(req.file)

})


};
Member.prototype.addMember = (req, res) => {
  let obj = req.body;
  console.log("obj ", obj);
  let model = new memberModel(obj);
  console.log("model ", model);
  model.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        success: true,
        message: "Member fetched successfully",
        result,
      });
    }
  });
};

Member.prototype.updateMemberById = (req, res) => {
  let id = req.body._id;
  memberModel.findByIdAndUpdate(
    id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profession: req.body.profession,
      secteur: req.body.secteur,
      email: req.body.email,
      telephone: req.body.telephone,
      image: req.body.image,
      sexe: req.body.sexe,
      type: req.body.type,
      codeStructure: req.body.codeStructure,
      codeCommission: req.body.codeCommission,
      gouvernerat: req.body.gouvernerat,
      delegation: req.body.delegation,
      birthDate: req.body.birthDate,
      nationality: req.body.nationality,
      cin: req.body.cin,
      birthPlace : req.body.birthPlace,
      joiningDate: req.body.joiningDate,
      observation : req.body.observation,

    },

    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

Member.prototype.deleteMemberById = (req, res) => {
  let id = req.body._id;
  console.log("delete Member ", req.body);
  memberModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = Member;