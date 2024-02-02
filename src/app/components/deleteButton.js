import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SaveButton from "./saveButton";

export default function DeleteComment({ comment, path }) {
  async function handleDeleteComment() {
    "use server";
    await sql`DELETE FROM comments WHERE id = ${comment}`;
    revalidatePath(`/content/${path}`);
    redirect(`/content/${path}`);
  }

  return (
    <form action={handleDeleteComment}>
      <SaveButton name="Delete Comment" />
    </form>
  );
}
