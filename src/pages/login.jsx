import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";

function Login() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div className="bg-gray-800 flex items-center justify-center">
        <form className="bg-white p-6 rounded shadow-md h-100 w-100 items-center justify-content-center m-20">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login to Your Account
            </h2>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <h5 className="text-center m-5">
              Don't have an account?
              <a className="text-blue-500 hover:text-blue-800" href="/register">
                Register
              </a>
            </h5>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Login;
