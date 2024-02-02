import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Football Debate</h1>
      <Link href="/content">
        <h2>Table Football</h2>
      </Link>
    </div>
  );
}
