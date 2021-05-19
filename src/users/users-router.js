import express from "express";
import usersController from "./users-controller";

const router = express.Router();
const controller = new usersController();

router.post('/register',controller.register);
router.get('/signin',controller.signin);


module.exports = router;