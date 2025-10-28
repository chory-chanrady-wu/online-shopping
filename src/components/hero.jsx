import React from "react";
import logo from "../assets/images/logo.png";
import "../App.css";

function Hero() {
  return (
    <div className="bg-gray-900 relative min-h-screen flex flex-col items-center justify-center ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src={logo} alt="logo" className="h-30 w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="group relative text-indigo-100 transition duration-300 text-xl font-semibold"
            >
              <span>Home</span>
              <span class="absolute left-0 bottom-0 h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full hover:text-indigo-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-indigo-100 transition duration-300 text-xl font-semibold"
            >
              <span>Product</span>
              <span class="absolute left-0 bottom-0 h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full hover:text-indigo-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-indigo-100 transition duration-300 text-xl font-semibold"
            >
              <span>Feature</span>
              <span class="absolute left-0 bottom-0 h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full hover:text-indigo-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-indigo-100 transition duration-300 text-xl font-semibold"
            >
              <span>Marketplace</span>
              <span class="absolute left-0 bottom-0 h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full hover:text-indigo-300 "></span>
            </a>
            <a
              href="#"
              className="group relative text-indigo-100 transition duration-300 text-xl font-semibold"
            >
              <span>Company</span>
              <span class="absolute left-0 bottom-0 h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full  hover:text-indigo-300"></span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-xl font-semibold text-indigo-100 hover:text-indigo-300 transition duration-300"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
