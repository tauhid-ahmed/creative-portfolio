import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 px-4 text-center dark:from-stone-950 dark:to-stone-900">
      <div className="relative mb-4 flex h-60 w-60 items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 opacity-80 blur-3xl dark:from-violet-600/20 dark:via-fuchsia-600/20 dark:to-pink-600/20" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 opacity-80 blur-xl animate-pulse dark:from-violet-600/20 dark:via-fuchsia-600/20 dark:to-pink-600/20" />

        {/* 404 Text */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-8xl font-extrabold text-transparent dark:from-violet-400 dark:via-fuchsia-300 dark:to-pink-400">
            404
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="h-1 w-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-300" />
            <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
              Page not found
            </span>
            <div className="h-1 w-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 dark:from-fuchsia-300 dark:to-pink-400" />
          </div>
        </div>
      </div>

      <h2 className="mb-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-3xl">
        Oops! We've lost this page
      </h2>
      <p className="mb-8 max-w-md text-stone-600 dark:text-stone-400">
        The page you're looking for doesn't exist or has been moved to another
        URL.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          className="group bg-gradient-to-r text-white from-violet-600 to-fuchsia-600 transition-all hover:from-violet-700 hover:to-fuchsia-700 dark:from-violet-500 dark:to-fuchsia-500 dark:hover:from-violet-600 dark:hover:to-fuchsia-600"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Back to Home
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="group border-stone-300 dark:border-stone-700 dark:text-white text-stone-950 dark:hover:text-stone-100 hover:text-stone-200"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Go Back
          </Link>
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-80 blur-2xl dark:from-violet-500/10 dark:to-fuchsia-500/10" />
      <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 opacity-80 blur-2xl dark:from-fuchsia-400/10 dark:to-pink-400/10" />
      <div className="absolute bottom-40 left-1/4 h-16 w-16 rounded-full bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-80 blur-xl dark:from-violet-500/10 dark:to-fuchsia-500/10" />
      <div className="absolute right-1/4 top-40 h-24 w-24 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 opacity-80 blur-xl dark:from-fuchsia-400/10 dark:to-pink-400/10" />
    </div>
  );
}
