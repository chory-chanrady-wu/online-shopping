import React, { useState } from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    // Demo: simulate async auth
    setTimeout(() => {
      setLoading(false);
      console.log("Login submitted:", { email, password });
      // TODO: replace with real auth integration
      alert("Signed in (demo)");
    }, 700);
  };

  return (
    <section>
      <div>
        <Hero />
      </div>
      <div
        className="bg-gray-800 flex items-center justify-center"
        style={{ display: "flex", justifyContent: "center", padding: 24 }}
      >
        <form
          className="shadow-lg rounded-lg p-6 bg-gray-900 h-150 w-200 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-bold mb-6 text-white">
            Sign in
          </h2>

          {error && (
            <div
              className="form-error"
              style={{ color: "#b00020", marginBottom: 12 }}
              role="alert"
            >
              {error}
            </div>
          )}

          <label style={{ display: "block", marginBottom: 12 }}>
            <div className="text-white">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-2 box-border"
            />
          </label>

          <label style={{ display: "block", marginBottom: 12 }}>
            <div className="text-white">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-2 box-border"
            />
          </label>

          {/* google login button */}
          <div className="mb-4">
            <p className="text-white text-center mb-2">Or</p>
            <button
              type="button"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Google
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-2 px-4 rounded"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
