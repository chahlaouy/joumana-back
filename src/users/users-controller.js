import user from "./user-model";

class User {}




User.prototype.register = (req, res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new user(obj);
    console.log("model ", model);
    model.save((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          success: true,
          message: "user registred successfully",
          result,
        });
      }
    });
};

User.prototype.signin = (req, res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new user(obj);
    console.log("model ", model);
    model.save((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          success: true,
          message: "user registred successfully",
          result,
        });
      }
    });
};


module.exports = User;