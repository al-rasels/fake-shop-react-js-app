import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-400">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-400">
          Terms of Service
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
