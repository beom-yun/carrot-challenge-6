"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import {
  BoltIcon,
  EnvelopeIcon,
  FireIcon,
  KeyIcon as OutlineKeyIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { KeyIcon as SolidKeyIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import createAccountAction from "./actions";

export default function CreateAccountPage() {
  const [state, dispatch] = useFormState(createAccountAction, null);

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
      <span className="mb-5 text-4xl font-bold">Create Account</span>
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
        icon={<OutlineKeyIcon className="size-4" />}
        errors={state?.fieldErrors.password}
      />
      <Input
        name="passwordConfirm"
        type="password"
        placeholder="Password Confirm"
        icon={<SolidKeyIcon className="size-4" />}
        errors={state?.fieldErrors.passwordConfirm}
      />
      <Button text="Create account" />
      {/* {state?.success ? <Toast /> : null} */}
    </form>
  );
}
