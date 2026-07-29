"use client";

import { useEffect } from "react";
import Link from "next/link";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center sm:py-32 lg:px-8">
      <div className="relative flex flex-col items-center max-w-md">
        <h1 className="text-9xl font-bold tracking-tight text-poppy-red/10 select-none font-serif">500</h1>
        <div className="absolute top-[4.5rem]">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-board-black sm:text-5xl font-serif">Une erreur est survenue</h2>
        </div>
        <p className="mt-12 text-base leading-7 text-board-black/60">
          Nous rencontrons un problème technique. Veuillez réessayer ou contacter le support si le problème persiste.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-blue-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-navy transition duration-150"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-board-black hover:text-board-black/80"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
