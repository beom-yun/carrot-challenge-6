"use server";

import bcrypt from "bcrypt";
import db from "@/lib/db";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(user);
};

const checkUsernameExists = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .refine(checkEmailExists, "The email doesn't exists."),
  username: z
    .string()
    .trim()
    .refine(checkUsernameExists, "The username doesn't exists."),
  password: z.string().trim(),
});

export default async function loginAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) return { success: false, ...result.error.flatten() };

  const user = await db.user.findUnique({
    where: { email: result.data.email, username: result.data.username },
    select: { id: true, password: true },
  });
  const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
  if (ok) {
    const session = await getSession();
    session.id = user!.id;
    await session.save();
    redirect("/profile");
  } else {
    return {
      success: false,
      fieldErrors: { password: ["Wrong password"], email: [], username: [] },
    };
  }
}
