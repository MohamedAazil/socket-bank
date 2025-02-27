import express from "express";
import { createPayment } from "../controllers/paymentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPayment); // Protect payment processing

export default router;
