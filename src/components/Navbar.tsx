"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // hide navbar on /login or /signup
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove token
    router.push("/login"); // redirect to login
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold">My App</h1>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/notes">Notes</Link>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
