"use client";

import { useState } from "react";
import { loginUser } from "../../api/users";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length && password.length) {
      loginUser({ email, password }).then((data) => {
        if (data && data.token) {
          localStorage.setItem("user", JSON.stringify(data));
          router.push("/");
        }
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Left side */}
        {/* <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-blue-600 to-green-500">
          <div className="w-48 h-48 bg-white/20 rounded-full"></div>
        </div> */}

        {/* Right side */}
        <div className="flex items-center justify-center p-10">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Password field with eye toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition"
            >
              Login
            </button>
            <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
          </form>
        </div>
      </div>
    </div>
  );
}
