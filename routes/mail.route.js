import express from "express";
import emailController from "../controllers/emails.controller"
const router = express.Router();


router.get('/mail', (req, res) => {
  emailController.getEmail(req, res);
});


export default router;