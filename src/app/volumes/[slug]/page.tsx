import { volumes } from "@/lib/data";
import Image from "next/image";

type PageProps = { params: { slug: string } };

export default async function VolumePage({ params }: PageProps) {
  const { slug } = await params;
  const volume = volumes.find((volume) => volume.slug === slug);
  if (!volume) return;

  console.log(volume.cover);
  return (
    <main>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <ul key={book.ordinal}>
            <li>
              <h2>{book.title}</h2>
              <p>{book.ordinal}</p>
            </li>
          </ul>
        ))}
      </ul>
      <Image alt={volume.title} src={volume.cover} width={200} height={200} />
    </main>
  );
}
