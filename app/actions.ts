"use server";

const checkPassword = (password: string) => Boolean(password === "12345");

export default async function loginAction(prevState: any, formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email") + "",
    username: formData.get("username") + "",
    password: formData.get("password") + "",
  };
  const result = checkPassword(data.password);
  if (!result) {
    return { success: false, errors: ["Wrong password"] };
  }
  return { success: true };
}
