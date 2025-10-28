import logo from "../assets/images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Center: Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <Link to="/" className="hover:text-indigo-300">
              Home
            </Link>
            <Link to="/product" className="hover:text-indigo-300">
              Product
            </Link>
            <a href="#" className="hover:text-indigo-300">
              Feature
            </a>
            <a href="#" className="hover:text-indigo-300">
              Marketplace
            </a>
            <a href="#" className="hover:text-indigo-300">
              Company
            </a>
          </nav>

          {/* Right: Login */}
          <div>
            <a href="#" className="hover:text-indigo-300">
              Log in →
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
