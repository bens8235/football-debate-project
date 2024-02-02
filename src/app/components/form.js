import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SaveButton from "./saveButton";

export default function Form({ id }) {
  async function handleAddComment(formData) {
    "use server";

    const comment = formData.get("comment");

    await sql`INSERT INTO comments (comment, posts_id) VALUES (${comment}, ${id} )`;

    revalidatePath(`/content/${id}`);

    redirect("/content");
  }
  return (
    <div>
      <form action={handleAddComment}>
        <input required name="comment"></input>
        <SaveButton name="Add Comment" />
      </form>
    </div>
  );
}
