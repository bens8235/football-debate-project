import DeleteComment from "@/app/components/deleteButton";
import EditComment from "@/app/components/editButton";
import Header from "@/app/components/header";
import { sql } from "@vercel/postgres";

export default async function Comments({ params }) {
  const comments =
    await sql`SELECT * FROM comments WHERE id= ${params.commentId}`;
  return (
    <div>
      <Header />
      <p>{comments.rows[0].comment}</p>
      <DeleteComment comment={params.commentId} path={params.id} />
      <EditComment comment={params.commentId} path={params.id} />
    </div>
  );
}
