import Link from "next/link";
import { Volume } from "../types/database";

export default async function VolumesPage() {
  const res = await fetch("http://localhost:3000/api/volumes", {
    method: "GET",
  });
  const volumesData: Volume[] = await res.json();

  console.log(volumesData);
  return (
    <main>
      <h1>All Volumes</h1>
      <ul>
        {volumesData.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
