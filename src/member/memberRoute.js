import express from "express";
import memberController from "./memberController";

const router = express.Router();
const controller = new memberController();

router.post('/',controller.addMember);
router.get('/',controller.getMembers);
router.post('/upload',controller.upload);
router.get('/:id',controller.getMemberById);
router.get('/custom/:id',controller.getMemberByCustomId);
router.put('/',controller.updateMemberById);
router.delete('/',controller.deleteMemberById);

module.exports = router;


