import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { BorderBeam } from "@/components/ui/border-beam";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null); 

  const { login } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to log in: " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-white/10 backdrop-blur">

        <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
          Welcome
        </h2>

        {error && (
          <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              ref={emailRef}   
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-neutral-800 border border-white/10 px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500"
             placeholder="••••••••"

            
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
           Don’t have an account?{" "}
           <Link
             to="/signup"
             className="text-emerald-400 hover:text-emerald-300 font-medium"
           >
             Sign Up
           </Link>
         </p>
        <div className="mt-6 pt-4 relative">
         
           
            <center>
              <strong className="text-gray-500 leading-relaxed text-sm">
                <p>Email for Admin: <span className="text-yellow-600 font-medium">hussaindev@gmail.com</span></p>
                <p>Password for Admin: <span className="text-yellow-600 font-medium">hussainali</span></p>
              </strong>
            </center>
          </div>

        <BorderBeam size={240} duration={9} />
      </div>
    </div>
  );
}
 