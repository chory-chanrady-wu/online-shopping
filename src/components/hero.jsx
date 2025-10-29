import "../App.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gray-900 font-bold text-yellow-400">
      <header className="p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Center: Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <Link to="/home" className="hover:text-indigo-400">
              Home
            </Link>
            <Link to="/product" className="hover:text-indigo-400">
              Product
            </Link>
            <Link to="/trending" className="hover:text-indigo-400">
              Trending
            </Link>
            <Link to="/support" className="hover:text-indigo-400">
              Support
            </Link>
            <Link to="/company" className="hover:text-indigo-400">
              Company
            </Link>
          </nav>

          {/* Right: Login */}
          <div>
            <a href="#" className="hover:text-indigo-400">
              Log in →
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
