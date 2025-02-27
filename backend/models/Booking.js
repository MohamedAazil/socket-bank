import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  socketNumber: { type: Number, required: true },
  plan: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in minutes
  paymentStatus: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", BookingSchema);
