import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // Use router.post() for signup
router.post("/login", login);   // Use router.post() for login
router.post("/logout", logout);

export default router;
