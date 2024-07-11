import db from "@/lib/db";
import getSession from "@/lib/session";
import {
  EnvelopeIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: { id: session.id },
    });
    if (user) return user;
  }
  redirect("/");
}

export default async function ProfilePage() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 pb-20">
      <UserGroupIcon className="size-14 text-red-500" />
      <span className="my-5 text-4xl font-bold">Hello, {user.username}!</span>
      <div className="flex w-full flex-col gap-3 rounded-lg bg-white px-5 pb-4 pt-3 shadow-md shadow-gray-200 ring-1 ring-gray-300">
        <div className="flex">
          <span className="font-semibold text-gray-400">기본정보</span>
        </div>
        <hr />
        <div className="flex items-center justify-start gap-3 px-2">
          <UserIcon className="size-5 text-gray-600" />
          <span>{user.username}</span>
        </div>
        <div className="flex items-center justify-start gap-3 px-2">
          <EnvelopeIcon className="size-5 text-gray-600" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center justify-start gap-3 px-2">
          <UsersIcon className="size-5 text-gray-600" />
          <span>{user.bio}</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="rounded-xl bg-cyan-500 px-5 py-3 text-white transition-all hover:bg-cyan-400 active:scale-95"
        >
          Go Tweets!
        </Link>
        <form action={logOut}>
          <button className="rounded-xl bg-red-500 px-5 py-3 text-white transition-all hover:bg-red-400 active:scale-95">
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}
