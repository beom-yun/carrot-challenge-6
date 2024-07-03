import {
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <FireIcon className="size-20 text-red-500" />
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <EnvelopeIcon className="size-4" />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2.5 outline-none"
          />
        </div>
        <span className="px-5 text-sm text-red-500">Wrong password</span>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <UserIcon className="size-4" />
          <input
            type="text"
            placeholder="Username"
            className="w-full py-2.5 outline-none"
          />
        </div>
        <span className="px-5 text-sm text-red-500">Wrong password</span>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
          <KeyIcon className="size-4" />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2.5 outline-none"
          />
        </div>
        <span className="px-5 text-sm text-red-500">Wrong password</span>
      </div>

      <button>Log in</button>
    </div>
  );
}
