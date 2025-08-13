import { volumes } from "@/lib/data";
import Link from "next/link";

export default function VolumesPage() {
  return (
    <main>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
