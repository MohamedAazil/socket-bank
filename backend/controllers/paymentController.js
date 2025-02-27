import Razorpay from "razorpay";
import Payment from "../models/Payment.js";
import dotenv from 'dotenv'

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createPayment = async (req, res) => {
  try {
    const { userId, bookingId, amount } = req.body;
    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    const newPayment = new Payment({
      userId,
      bookingId,
      paymentId: order.id,
      amount,
      status: "Pending",
    });

    await newPayment.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
