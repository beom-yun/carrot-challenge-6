"use server";

import { PAGE_SIZE } from "@/lib/constants";
import db from "@/lib/db";

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
