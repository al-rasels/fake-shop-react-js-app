import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="/" className="hover:text-gray-400">
          Privacy Policy
        </Link>
        <Link to="/" className="hover:text-gray-400">
          Terms of Service
        </Link>
        <Link to="/" className="hover:text-gray-400">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
