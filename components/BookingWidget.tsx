"use client";

import { useState } from "react";

type BookingWidgetProps = {
  roomId: string;
  pricePerNight: number;
};

export default function BookingWidget({ roomId, pricePerNight }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async () => {
    if (!checkIn || !checkOut || !name || !email) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId,
          checkIn,
          checkOut,
          guestsCount: parseInt(guests),
          totalAmount: pricePerNight, // Simplified: Just charging 1 night for now
          guestName: name,
          guestEmail: email,
        }),
      });

      if (response.ok) {
        alert("Booking Confirmed! Check your email for details.");
        // Reset form
        setCheckIn("");
        setCheckOut("");
        setName("");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sticky top-32 bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.06)]">
      <div className="flex items-end gap-2 mb-8 border-b border-gray-100 pb-8">
        <span className="text-3xl md:text-4xl font-serif">₹{pricePerNight.toLocaleString("en-IN")}</span>
        <span className="text-sm text-gray-400 mb-1.5">/ night</span>
      </div>

      {/* Booking Inputs */}
      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
          <div className="flex border-b border-gray-200">
            <div className="w-1/2 p-3 border-r border-gray-200 bg-white">
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Check-In</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full text-sm outline-none bg-transparent text-black font-medium" />
            </div>
            <div className="w-1/2 p-3 bg-white">
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Check-Out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full text-sm outline-none bg-transparent text-black font-medium" />
            </div>
          </div>
          <div className="p-3 bg-white border-b border-gray-200">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Guests</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full text-sm outline-none bg-transparent text-black font-medium appearance-none cursor-pointer">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <div className="p-3 bg-white border-b border-gray-200">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="w-full text-sm outline-none bg-transparent text-black font-medium placeholder:text-gray-300" />
          </div>
          <div className="p-3 bg-white">
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Email</label>
            <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-sm outline-none bg-transparent text-black font-medium placeholder:text-gray-300" />
          </div>
        </div>
      </div>

      <button 
        onClick={handleBooking}
        disabled={isSubmitting}
        className="w-full bg-black text-white py-4 md:py-5 rounded-2xl text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-all mb-4 shadow-xl shadow-black/10 hover:shadow-black/20 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processing..." : "Reserve Now"}
      </button>
      <p className="text-center text-xs text-gray-400">You won't be charged yet</p>
    </div>
  );
}