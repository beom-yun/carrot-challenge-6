"use client";

import { useFormState } from "react-dom";
import Input from "./input";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { addTweet } from "@/app/actions";
import Button from "./button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddTweet() {
  const [state, dispatch] = useFormState(addTweet, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      window.location.reload();
    }
  }, [state, router]);

  return (
    <form
      action={dispatch}
      className="flex w-full flex-col gap-3 rounded-xl border-2 p-5"
    >
      <span className="text-center text-xl font-bold">Add Tweet</span>
      <Input
        name="tweet"
        type="text"
        icon={<DocumentTextIcon className="size-6" />}
        placeholder="Tell me!"
        errors={state?.fieldErrors.tweet}
      />
      <Button text="Tweet!" />
    </form>
  );
}
