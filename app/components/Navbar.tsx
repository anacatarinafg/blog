import Link from "next/link";
import ThemeMode from "./ThemeMode";

export default function Navbar() {
  return (
    <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="font-bold uppercase">
              ag
            </h1>
          </Link>
          <ThemeMode />
        </div>
      </nav>
    </header>
  );
}
