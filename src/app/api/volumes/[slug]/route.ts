import { volumes } from "@/app/lib/data";
import { Volume } from "@/app/types/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const volume = volumes.find((volume) => volume.slug === slug);
  return NextResponse.json(volume);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const indexToDelete = volumes.findIndex((volume) => volume.slug === slug);
  if (indexToDelete === -1) return NextResponse.json({ error: "Not found" });

  volumes.splice(indexToDelete, 1);
  return NextResponse.json({ success: true });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<Volume> },
) {
  const { slug, title, description, cover, books, color } = await params;
  const indexToUpdate = volumes.findIndex((volume) => volume.slug === slug);
  if (indexToUpdate === -1) return NextResponse.json({ eror: "Not found" });

  volumes[indexToUpdate].title = title;
  volumes[indexToUpdate].slug = slug;
  volumes[indexToUpdate].description = description;
  volumes[indexToUpdate].cover = cover;
  volumes[indexToUpdate].books = books;
  volumes[indexToUpdate].color = color;

  return NextResponse.json({ success: true });
}
