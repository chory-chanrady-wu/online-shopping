import "../App.css";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            About Us
          </h3>
          <p className="text-sm leading-6">
            Online Shopping is a modern e-commerce platform that allows
            customers to explore, compare, and purchase products easily from
            anywhere at any time. Our goal is to provide a convenient, secure,
            and enjoyable shopping experience by offering a wide range of
            quality products at affordable prices — all delivered right to your
            doorstep.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/trending" className="hover:text-yellow-400">
                Trending
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-yellow-400">
                Support
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-yellow-400">
                Company
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: chorychanrady.wu@gmail.com</p>
          <p className="text-sm">Phone: +855 10 346085</p>
          <p className="text-sm">Telegram: @chorychanrady</p>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/chorychanrady110302/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/chorychanrady/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.tiktok.com/@chorychanrady?lang=en"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img src="/images/tiktok.png" alt="Tiktok" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 Online Shopping. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
