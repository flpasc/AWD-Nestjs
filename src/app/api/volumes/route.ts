import { volumes } from "@/app/lib/data";
import { Volume } from "@/app/types/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(volumes);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<Volume> },
) {
  const { slug, title, description, cover, books, color } = await params;
  const newBook: Volume = { slug, title, description, cover, books, color };
  volumes.push(newBook);
  return NextResponse.json(newBook);
}
