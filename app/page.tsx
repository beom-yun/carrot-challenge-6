import { CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 pb-20">
      <CommandLineIcon className="size-14 text-red-500" />
      <span className="text-4xl font-bold">Carrot Challenge</span>
      <p className="text-center">
        {`Used by some of the world's largest companies, `}
        <a href="https://nomadcoders.co/" className="font-bold underline">
          Nomadcoders
        </a>
        {` enables you to
        create high-quality web applications with the power of React components.`}
      </p>
      <div className="flex gap-5">
        <Link
          href="/log-in"
          className="rounded-xl border-2 px-5 py-3 transition-all hover:bg-gray-100 active:scale-95"
        >
          Log In
        </Link>
        <Link
          href="/create-account"
          className="rounded-xl bg-red-500 px-5 py-3 text-white transition-all hover:bg-red-400 active:scale-95"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
