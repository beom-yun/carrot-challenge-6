"use client";

import LoginButton from "@/components/login-button";
import {
  BoltIcon,
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import loginAction from "./actions";
import LoginInput from "@/components/login-input";

export default function Home() {
  const [state, dispatch] = useFormState(loginAction, null);

  return (
    <form
      action={dispatch}
      className="flex h-screen flex-col items-center justify-center gap-5 pb-20"
    >
      <div className="flex items-end gap-2 text-red-500">
        <StarIcon className="mb-5 size-14" />
        <FireIcon className="mb-5 size-20" />
        <BoltIcon className="mb-5 size-14" />
      </div>
      <LoginInput
        name="email"
        type="email"
        placeholder="Email"
        icon={<EnvelopeIcon className="size-4" />}
      />
      <LoginInput
        name="username"
        type="text"
        placeholder="Username"
        icon={<UserIcon className="size-4" />}
      />
      <LoginInput
        name="password"
        type="text"
        placeholder="Password"
        icon={<KeyIcon className="size-4" />}
        errors={state?.errors}
      />
      <LoginButton />
    </form>
  );
}
