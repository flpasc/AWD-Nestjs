import { volumes } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PageProps = { params: Promise<{ slug: string }> };

export default async function VolumePage({ params }: PageProps) {
  const { slug } = await params;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) return notFound();

  return (
    <main>
      <Suspense>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book) => (
            <li key={book.ordinal}>
              <h2>{book.title}</h2>
              <p>{book.ordinal}</p>
            </li>
          ))}
        </ul>
        <Image alt={volume.title} src={volume.cover} width={200} height={200} />
      </Suspense>
    </main>
  );
}
