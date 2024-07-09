"use client";

import Button from "@/components/button";
import {
  BoltIcon,
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import Input from "@/components/input";
import Toast from "@/components/toast";
import loginAction from "./actions";

export default function LogInPage() {
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
      <span className="mb-5 text-4xl font-bold">Log In</span>
      <Input
        name="email"
        type="text"
        placeholder="Email"
        icon={<EnvelopeIcon className="size-4" />}
        errors={state?.fieldErrors.email}
      />
      <Input
        name="username"
        type="text"
        placeholder="Username"
        icon={<UserIcon className="size-4" />}
        errors={state?.fieldErrors.username}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        icon={<KeyIcon className="size-4" />}
        errors={state?.fieldErrors.password}
      />
      <Button text="Log in" />
      {state?.success ? <Toast /> : null}
    </form>
  );
}
