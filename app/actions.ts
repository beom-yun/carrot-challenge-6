"use server";

import { z } from "zod";

const onlyEmail = "@zod.com";

const checkEmail = (email: string) => email === onlyEmail;

const passwordRegexp = new RegExp(/(?=.*\d).+$/);

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .refine(checkEmail, `Only ${onlyEmail} emails are allowed.`),
  username: z
    .string()
    .trim()
    .min(5, "Username should be at least 5 characters long."),
  password: z
    .string()
    .trim()
    .min(10)
    .regex(
      passwordRegexp,
      "Password should be contain at least one number (0123456789).",
    ),
});

export default async function loginAction(prevState: any, formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email") + "",
    username: formData.get("username") + "",
    password: formData.get("password") + "",
  };
  const result = formSchema.safeParse(data);
  if (!result.success) return { success: false, ...result.error.flatten() };
  return { success: true, formErrors: [], fieldErrors: {} };
}
