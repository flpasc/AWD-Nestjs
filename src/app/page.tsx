import Image from "next/image";
import { introduction } from "../lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </main>
  );
}
