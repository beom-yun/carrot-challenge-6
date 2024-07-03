import {
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 pb-20">
      <FireIcon className="mb-5 size-20 text-red-500" />
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <EnvelopeIcon className="size-4" />
          <input
            type="email"
            placeholder="Email"
            className="h-11 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <UserIcon className="size-4" />
          <input
            type="text"
            placeholder="Username"
            className="h-11 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <KeyIcon className="size-4" />
          <input
            type="password"
            placeholder="Password"
            className="h-11 w-full outline-none"
          />
        </div>
        <span className="px-5 text-sm text-red-500">Wrong password</span>
      </div>

      <button className="h-12 w-full rounded-full bg-gray-200 font-semibold transition-all hover:bg-gray-300 active:scale-95">
        Log in
      </button>
    </div>
  );
}
