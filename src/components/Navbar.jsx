import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#E7F0DC] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center gap-6">
        <div className="text-gray-800 text-lg font-semibold">LOGO</div>

        {/* Icon for mobile */}
        <div className="lg:hidden ml-auto" onClick={toggleMenu}>
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`lg:flex lg:items-center lg:ml-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-4 relative">
            <li>
              <a href="#beranda" className="px-4 py-2 text-gray-800 ">
                Beranda
              </a>
            </li>
            <li className="relative">
              {" "}
              {/* Wrap with relative for positioning dropdown */}
              <a
                href="#blog/artikel"
                className="px-4 py-2 text-gray-800 "
                onClick={toggleDropdown}
              >
                Blog/Artikel
              </a>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#artikel1"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Tips Perawaran Tanaman
                      </a>
                    </li>
                    <li>
                      <a
                        href="#artikel2"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Artikel Penyakit dan Hama
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#perawatan" className="px-4 py-2 text-gray-800 ">
                Perawatan
              </a>
            </li>
            <li>
              <a href="#tentangkami" className="px-4 py-2 text-gray-800 ">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
