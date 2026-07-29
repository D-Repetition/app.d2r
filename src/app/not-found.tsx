import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center sm:py-32 lg:px-8">
      <div className="relative flex flex-col items-center max-w-md">
        <h1 className="text-9xl font-bold tracking-tight text-blue-navy/10 select-none font-serif">404</h1>
        <div className="absolute top-[4.5rem]">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-board-black sm:text-5xl font-serif">Page introuvable</h2>
        </div>
        <p className="mt-12 text-base leading-7 text-board-black/60">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-lg bg-blue-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-navy transition duration-150"
          >
            Retourner à l'accueil
          </Link>
          <Link href="/nous-contactez" className="text-sm font-semibold text-board-black hover:text-board-black/80">
            Nous contacter <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
