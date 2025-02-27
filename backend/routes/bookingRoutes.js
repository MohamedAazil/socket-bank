import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking); // Protect booking creation
router.get("/", authMiddleware, getBookings); // Protect fetching bookings

export default router;
