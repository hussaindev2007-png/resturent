import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { BorderBeam } from "@/components/ui/border-beam";

export  function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
    const emailRef = useRef(null); // 👈 ref
  

  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
      emailRef.current?.focus();
    }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to create account: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      
      {/* 🌑 DARK CARD */}
      <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

        <h2 className="text-4xl font-extrabold mb-6 text-center text-white tracking-wide">
          Create Account
        </h2>

        <p className="text-center text-sm text-gray-400 mb-6">
          Join us and get started today
        </p>

        {error && (
          <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-5 border border-red-500/30">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-2.5 font-semibold text-white transition-all duration-200 ${
              loading
                ? "bg-emerald-700/50 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 active:scale-[0.98]"
            }`}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Login
          </Link>
        </p>

        {/* ✨ MAGIC UI BORDER */}
        <BorderBeam size={240} duration={9} />
      </div>
    </div>
  );
}
