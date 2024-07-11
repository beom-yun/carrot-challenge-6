import TweetList from "@/components/tweet-list";
import { PAGE_SIZE } from "@/lib/constants";
import db from "@/lib/db";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";
import { Prisma } from "@prisma/client";

async function getInitialTweets() {
  const tweets = await db.tweet.findMany({
    include: { user: { select: { username: true } } },
    orderBy: { created_at: "desc" },
    take: PAGE_SIZE,
  });
  return tweets;
}

export type InitialTweets = Prisma.PromiseReturnType<typeof getInitialTweets>;

export default async function RootPage() {
  const initialTweets = await getInitialTweets();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 pb-20">
      <EnvelopeOpenIcon className="mb-5 size-14 text-red-500" />
      <span className="mb-5 text-4xl font-bold">Tweets!</span>

      <TweetList initialTweets={initialTweets} />
    </div>
  );
}
