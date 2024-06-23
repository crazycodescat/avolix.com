import express from "express";
import { mailer } from "../controller/mailerController.js";

const router = express.Router();

router.post("/rfq/", mailer);

export default router;
