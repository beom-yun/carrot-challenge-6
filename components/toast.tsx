import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Toast() {
  return (
    <div className="flex h-14 w-full items-center gap-2 rounded-xl bg-gradient-to-tr from-green-400 to-green-300 px-5 font-semibold shadow-md transition-all">
      <CheckCircleIcon className="size-6" />
      <span>Welcome back!</span>
    </div>
  );
}
