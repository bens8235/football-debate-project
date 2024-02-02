"use client";

import { useFormStatus } from "react-dom";

export default function SaveButton({ name }) {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? "pending" : name}</button>;
}
