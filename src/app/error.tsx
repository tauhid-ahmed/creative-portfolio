"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 text-center dark:from-background dark:to-secondary">
      <div className="relative mb-6 flex h-40 w-40 items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 opacity-80 blur-3xl dark:from-red-600/20 dark:via-orange-600/20 dark:to-amber-600/20" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 opacity-80 blur-xl animate-pulse dark:from-red-600/20 dark:via-orange-600/20 dark:to-amber-600/20" />

        {/* Error Icon */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 p-0.5 dark:from-red-600 dark:via-orange-600 dark:to-amber-600">
            <div className="rounded-full bg-white p-4 dark:bg-slate-950">
              <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Something went wrong!
      </h2>
      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400">
        We apologize for the inconvenience. Our team has been notified and is
        working to fix the issue.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={() => reset()}
          className="group bg-gradient-to-r from-red-500 to-amber-500 transition-all hover:from-red-600 hover:to-amber-600 dark:from-red-600 dark:to-amber-600 dark:hover:from-red-700 dark:hover:to-amber-700"
        >
          <RefreshCw className="mr-2 h-4 w-4 transition-all group-hover:rotate-180" />
          Try Again
        </Button>
        <Button
          asChild
          variant="outline"
          className="group text-black dark:text-white border-slate-300 dark:border-slate-700"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-80 blur-2xl dark:from-red-600/10 dark:to-orange-600/10" />
      <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-80 blur-2xl dark:from-orange-600/10 dark:to-amber-600/10" />
      <div className="absolute bottom-40 left-1/4 h-16 w-16 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-80 blur-xl dark:from-red-600/10 dark:to-orange-600/10" />
      <div className="absolute right-1/4 top-40 h-24 w-24 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-80 blur-xl dark:from-orange-600/10 dark:to-amber-600/10" />
    </div>
  );
}
