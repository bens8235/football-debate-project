import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SaveButton from "./saveButton";

export default function EditComment({ comment, path }) {
  async function handleEditComment(formData) {
    "use server";
    const updateComment = formData.get("updateComment");
    await sql`UPDATE comments SET comment = ${updateComment} WHERE id = ${comment}`;
    revalidatePath(`/content/${path}/${comment}`);
    revalidatePath(`/content/${path}`);
    redirect(`/content/${path}`);
  }

  return (
    <div>
      <form action={handleEditComment}>
        <input required name="updateComment"></input>

        <SaveButton name="Edit Comment" />
      </form>
    </div>
  );
}
