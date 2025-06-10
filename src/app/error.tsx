"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="cursor-pointer tracking-[-.05em] bg-[#201579] px-6 py-1 rounded-2xl text-white dark:invert"
      >
        Try again
      </button>
    </div>
  );
}
