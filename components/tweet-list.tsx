"use client";

import { getTweets, getTweetsLength } from "@/app/actions";
import { InitialTweets } from "@/app/page";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function TweetList({
  initialTweets,
}: {
  initialTweets: InitialTweets;
}) {
  const [tweets, setTweets] = useState(initialTweets);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const checkIsFirstOrLastPage = async (page: number) => {
    if (page === 0) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    if ((await getTweets(page + 1)).length === 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  };
  const onClickPrev = async () => {
    if (isFirstPage) return;
    setIsLoading(true);
    const prevTweets = await getTweets(page - 1);
    setTweets(prevTweets);
    setPage(page => page - 1);

    checkIsFirstOrLastPage(page - 1);
    setIsLoading(false);
  };
  const onClickNext = async () => {
    if (isLastPage) return;
    setIsLoading(true);
    const nextTweets = await getTweets(page + 1);
    setTweets(nextTweets);
    setPage(page => page + 1);
    checkIsFirstOrLastPage(page + 1);
    setIsLoading(false);
  };
  const [lastPage, setLastPage] = useState(0);
  const getLastPage = async () => {
    const page = await getTweetsLength();
    setLastPage(page);
  };
  useEffect(() => {
    getLastPage();
  }, []);

  return (
    <div className="flex justify-between gap-5">
      <button onClick={onClickPrev}>
        <ChevronLeftIcon className="size-10" />
      </button>

      {isLoading ? (
        "Loading..."
      ) : (
        <div className="flex flex-col items-center gap-3">
          {tweets.map(tweet => (
            <div
              key={tweet.id}
              className="flex w-full flex-col items-center rounded-lg border-[1px] border-cyan-300 bg-cyan-100 px-4 py-3 text-center transition-all hover:bg-cyan-200"
            >
              <span>{tweet.tweet}</span>
              <span className="mt-2 self-end text-sm font-bold">
                from. {tweet.user.username}
              </span>
            </div>
          ))}
          <span className="text-sm font-bold">
            {page + 1} of {lastPage} pages
          </span>
        </div>
      )}

      <button onClick={onClickNext}>
        <ChevronRightIcon className="size-10" />
      </button>
    </div>
  );
}
