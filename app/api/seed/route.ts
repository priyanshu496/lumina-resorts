import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const dummyRooms = [
  {
    name: "Ocean View Villa",
    type: "Villa",
    price: 12500, // Stored as integer
    size: "850 sq ft",
    capacity: 2,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Wake up to panoramic views of the ocean in this spacious villa featuring a private plunge pool and sun deck.",
    features: ["Private Plunge Pool", "Oceanfront Balcony", "King-size bed", "Butler Service", "Mini-bar"]
  },
  {
    name: "The Grand Suite",
    type: "Suite",
    price: 25000,
    size: "1200 sq ft",
    capacity: 4,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1600"
    ],
    description: "Our most luxurious offering, complete with a separate living area, dining room, and a massive wrap-around balcony.",
    features: ["Dining Room", "Wrap-around Balcony", "2 King Beds", "Chef Service"]
  },
  {
    name: "Garden Retreat",
    type: "Standard",
    price: 8000,
    size: "600 sq ft",
    capacity: 2,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1600"
    ],
    description: "Nestled in lush tropical gardens, this serene room offers the perfect quiet getaway with nature at your doorstep.",
    features: ["Garden View", "Queen Bed", "Rain Shower", "Free Wi-Fi"]
  }
];

export async function GET() {
  try {
    // 1. Wipe out existing rooms to prevent duplicates if you run this twice
    await prisma.room.deleteMany();

    // 2. Insert the dummy rooms
    const createdRooms = await Promise.all(
      dummyRooms.map((room) => prisma.room.create({ data: room }))
    );

    return NextResponse.json({ 
      message: "Database seeded successfully!", 
      rooms: createdRooms 
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}