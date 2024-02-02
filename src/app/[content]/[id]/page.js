import Form from "@/app/components/form";
import Header from "@/app/components/header";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function GetContent({ params }) {
  const posts = await sql`SELECT * FROM posts WHERE id= ${params.id}`;
  const comments =
    await sql`SELECT * FROM comments WHERE posts_id= ${params.id} ORDER BY id`;
  return (
    <div>
      <Header />
      <h2>{posts.rows[0].content}</h2>
      {comments.rows.map((comment) => {
        return (
          <div key={comment.id}>
            <Link
              className="comments"
              href={`/content/${params.id}/${comment.id}`}
            >
              <p>{comment.comment}</p>
              <p>Edit/Delete</p>
            </Link>
          </div>
        );
      })}
      <Form id={params.id} />
    </div>
  );
}
