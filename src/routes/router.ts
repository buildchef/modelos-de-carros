import express from "express";
import { Controller } from "../controllers/meuController";

const controller = new Controller();
const router = express.Router();
router.get('/teste', controller.teste);

export default router;