import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-pink-500 text-2xl font-bold">
          CloudSense
        </h1>

        <div className="flex gap-6 text-pink-600">
          <Link href="/">Home</Link>
          <Link href="/estimator">Estimator</Link>
          <Link href="#">Features</Link>
          <Link href="#">About</Link>
        </div>

      </div>
    </nav>
  );
}