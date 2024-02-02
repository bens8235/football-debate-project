import { sql } from "@vercel/postgres";
import Link from "next/link";
import Header from "../components/header";

export default async function Posts({ searchParams }) {
  const posts = await sql`SELECT * FROM posts`;

  if (searchParams.sort === "Desc") {
    posts.rows.reverse();
  }
  return (
    <div>
      <Header />
      <div className="posts-container">
        <div>
          {posts.rows.map((post) => {
            return (
              <div key={post.title}>
                <Link href={`/content/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Link className="sort" href="/content">
          List
        </Link>
        <Link className="sort" href="/content/?sort=Desc">
          Reverse List
        </Link>
      </div>
    </div>
  );
}
