import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomId, checkIn, checkOut, guestsCount, totalAmount, guestName, guestEmail } = body;

    // Basic validation
    if (!roomId || !checkIn || !checkOut || !guestName || !guestEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save the booking to PostgreSQL
    const booking = await prisma.booking.create({
      data: {
        roomId,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guestsCount: Number(guestsCount),
        totalAmount: Number(totalAmount),
        guestName,
        guestEmail,
        status: "CONFIRMED", // Auto-confirming for this portfolio build
      },
    });

    return NextResponse.json({ message: "Booking successful!", booking }, { status: 201 });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}