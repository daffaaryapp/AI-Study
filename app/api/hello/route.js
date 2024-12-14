import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

// Create a simple async Next.js API route handler
export async function GET() {
  try {
    // Send your event payload to Inngest
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "testUser @example.com",
      },
    });

    return NextResponse.json({ message: "Event sent!" });
  } catch (error) {
    console.error("Error sending event:", error);
    return NextResponse.json({ message: "Failed to send event." }, { status: 500 });
  }
}