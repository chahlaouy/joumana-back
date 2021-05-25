import express from "express";
import memberController from "./memberController";
const jwt = require('jsonwebtoken')

const User = require('../member/memberModel')

const router = express.Router();
const controller = new memberController();

router.post('/',controller.addMember);
router.get('/',controller.getMembers);
router.post('/upload',controller.upload);
router.get('/:id',controller.getMemberById);
router.get('/custom/:id',controller.getMemberByCustomId);
router.put('/',controller.updateMemberById);
router.delete('/',controller.deleteMemberById);


router.post('/login', async (request, response) => {

    const user = await User.findOne({email: request.body.username})
    if (!user) return response.status(400).send({
        message: 'email not valid'
    })

    if( request.body.password !== user.codeMember ) return response.status(400).send({
        message: 'password not valid'
    })

    const token = jwt.sign({_id: user._id}, 'tunisia-for-all')
    
    response.header('auth-token', token).send({
        token: token,
        user: user   
    })

})
module.exports = router;


