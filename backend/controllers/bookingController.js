import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, socketNumber, plan, price, duration } = req.body;
    const newBooking = new Booking({ userId, socketNumber, plan, price, duration });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
