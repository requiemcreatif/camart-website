import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/artists/${id}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching artist:", error);
    return NextResponse.json(
      { message: "Error fetching artist" },
      { status: 500 }
    );
  }
}
