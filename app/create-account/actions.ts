"use server";

import bcrypt from "bcrypt";
import db from "@/lib/db";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const passwordRegexp = new RegExp(/(?=.*\d).+$/);

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return !Boolean(user);
};

const checkUsernameExists = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return !Boolean(user);
};

const checkPasswordConfirm = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => password === passwordConfirm;

const formSchema = z
  .object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .refine(checkEmailExists, "The email already exists."),
    username: z
      .string()
      .trim()
      .min(5, "Username should be at least 5 characters long.")
      .refine(checkUsernameExists, "The username is already exists."),
    password: z
      .string()
      .min(10, "Password should be at least 10 characters long.")
      .regex(
        passwordRegexp,
        "Password should be contain at least one number (0123456789).",
      ),
    passwordConfirm: z.string(),
  })
  .refine(checkPasswordConfirm, {
    message: "The password does not match.",
    path: ["passwordConfirm"],
  });

export default async function createAccountAction(
  prevState: any,
  formData: FormData,
) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) return { success: false, ...result.error.flatten() };
  const user = await db.user.create({
    data: {
      email: result.data.email,
      username: result.data.username,
      password: await bcrypt.hash(result.data.password, 12),
    },
    select: { id: true },
  });
  const session = await getSession();
  session.id = user.id;
  await session.save();
  redirect("/profile");
}
