import express from "express";
import structerController from "./structerController";

const router = express.Router();
const controller = new structerController();

router.post('/',controller.addStructer);
router.get('/',controller.getStructers);
router.get('/:id',controller.getStructerById);
router.get('/custom/:id',controller.getStructerByCustomId);
router.put('/',controller.updateStructerById);
router.delete('/',controller.deleteStructerById);

module.exports = router;


