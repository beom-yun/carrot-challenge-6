"use server";

import { PAGE_SIZE } from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { z } from "zod";

export async function getTweets(page: number) {
  const tweets = await db.tweet.findMany({
    include: { user: { select: { username: true } } },
    orderBy: { created_at: "desc" },
    take: PAGE_SIZE,
    skip: page * PAGE_SIZE,
  });
  return tweets;
}

export async function getTweetsLength() {
  const tweetsLength = (await db.tweet.findMany()).length;
  return Math.ceil(tweetsLength / PAGE_SIZE);
}

const tweetSchema = z.object({
  tweet: z.string().refine((text: string) => Boolean(text), "Required"),
});

export async function addTweet(prevState: any, formData: FormData) {
  const session = await getSession();
  const data = { tweet: formData.get("tweet") };
  const result = tweetSchema.safeParse(data);

  if (!result.success) return { success: false, ...result.error.flatten() };
  const newTweet = await db.tweet.create({
    data: { tweet: result.data.tweet, user: { connect: { id: session.id } } },
    select: { id: true },
  });
  return { success: true, fieldErrors: { tweet: [] } };
}
