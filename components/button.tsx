"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="h-12 w-full rounded-full bg-gray-200 font-semibold transition-all hover:bg-gray-300 active:scale-95 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:active:scale-100"
    >
      {pending ? "Loading..." : `${text}`}
    </button>
  );
}
