import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  SettingsOutline,
  PersonOutline,
  MenuOutline,
  ChevronDownOutline,
} from "react-ionicons";

function NavbarLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Track which dropdown is open

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(null); // Close any open dropdown when toggling the menu
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(isDropdownOpen === dropdown ? null : dropdown); // Toggle only the selected dropdown
  };

  return (
    <nav className="bg-[#E7F0DC] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-25 h-10" />
        </div>

        {/* Navbar links */}
        <div className="flex-grow flex items-center justify-center space-x-6">
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/beranda-login"
              className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
            >
              Beranda
            </Link>

            {/* Blog/Artikel Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded cursor-pointer focus:outline-none"
                onClick={() => toggleDropdown("blog")}
              >
                Blog/Artikel
                <ChevronDownOutline
                  color={"#000000"}
                  height="24px"
                  width="24px"
                  className="ml-2"
                />
              </button>
              {isDropdownOpen === "blog" && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/panduan-login"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={() => setIsDropdownOpen(null)}
                      >
                        Tips Perawatan Tanaman
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/artikel-penyakit-tanaman-login"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={() => setIsDropdownOpen(null)}
                      >
                        Artikel Penyakit dan Hama
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Perawatan Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded cursor-pointer focus:outline-none"
                onClick={() => toggleDropdown("perawatan")}
              >
                Perawatan
                <ChevronDownOutline
                  color={"#000000"}
                  height="24px"
                  width="24px"
                  className="ml-2"
                />
              </button>
              {isDropdownOpen === "perawatan" && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/deteksi-penyakit"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={() => setIsDropdownOpen(null)}
                      >
                        Deteksi Penyakit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/histori-tanaman"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={() => setIsDropdownOpen(null)}
                      >
                        Histori Tanaman
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/tentang-kami-login"
              className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Navbar icons for desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link to="/sign-up" className="text-gray-800">
            {/* <PersonOutline color="#000000" height="24px" width="24px" /> */}
          </Link>
          <Link to="/personal-setting" className="text-gray-800">
            <SettingsOutline color="#000000" height="24px" width="24px" />
          </Link>
        </div>

        {/* Mobile menu icon with settings and user icons */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/sign-up" className="text-gray-800">
            <PersonOutline color="#000000" height="24px" width="24px" />
          </Link>
          <Link to="/settings" className="text-gray-800">
            <SettingsOutline color="#000000" height="24px" width="24px" />
          </Link>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <MenuOutline color={"#000000"} height="24px" width="24px" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#E7F0DC] p-4">
          <ul className="flex flex-col space-y-5">
            <li>
              <Link
                to="/beranda"
                className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
              >
                Beranda
              </Link>
            </li>

            {/* Mobile Blog/Artikel Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("blog")}
                className="flex justify-between w-full px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded focus:outline-none"
              >
                Blog/Artikel
                <ChevronDownOutline
                  color={"#000000"}
                  height="24px"
                  width="24px"
                />
              </button>
              {isDropdownOpen === "blog" && (
                <ul className="mt-2 space-y-2 ml-4">
                  <li>
                    <Link
                      to="/tips-perawatan-tanaman"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
                      onClick={() => setIsDropdownOpen(null)}
                    >
                      Tips Perawatan Tanaman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artikel-penyakit-tanaman"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
                      onClick={() => setIsDropdownOpen(null)}
                    >
                      Artikel Penyakit dan Hama
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Perawatan Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("perawatan")}
                className="flex justify-between w-full px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded focus:outline-none"
              >
                Perawatan
                <ChevronDownOutline
                  color={"#000000"}
                  height="24px"
                  width="24px"
                />
              </button>
              {isDropdownOpen === "perawatan" && (
                <ul className="mt-2 space-y-2 ml-4">
                  <li>
                    <Link
                      to="/deteksi-penyakit"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
                      onClick={() => setIsDropdownOpen(null)}
                    >
                      Deteksi Penyakit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/histori-tanaman"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
                      onClick={() => setIsDropdownOpen(null)}
                    >
                      Histori Tanaman
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/tentangkami"
                className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarLogin;
