import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lockIcon from "../assets/lock-icon.svg";
import userIcon from "../assets/user-icon.svg"; // Example icon for Pribadi
import otherIcon from "../assets/menu-icon.svg"; // Example icon for Lainnya
import kembaliIcon from "../assets/settings-icon.svg"; // Add the kembali icon

const AppearanceSettings = () => {
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    console.log("Personal info updated");
    navigate("/admin");
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic
    console.log("Account deleted");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-green-100 p-4 sm:p-6">
        <Link to="/beranda-login" className="flex items-center space-x-2">
          <img
            src="./src/assets/settings-icon.svg" // Add the icon path here
            alt="Pengaturan Icon"
            className="w-5 h-5"
          />
          <h2 className="text-lg font-bold">Pengaturan</h2>
        </Link>
        <ul className="mt-4 space-y-4">
          <li>
            <Link
              to="/personal-setting"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src="./src/assets/user-icon.svg"
                alt="Pribadi Icon"
                className="w-5 h-5"
              />
              <span>Pribadi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/password-setting"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src="./src/assets/lock-icon.svg"
                alt="Kata Sandi Icon"
                className="w-5 h-5"
              />
              <span>Kata Sandi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/appearance-setting"
              className="flex items-center space-x-2 p-2 rounded-md bg-white hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src="./src/assets/paint-icon.svg"
                alt="Tampilan Icon"
                className="w-5 h-5"
              />
              <span>Tampilan</span>
            </Link>
          </li>
          <li>
            <Link
              to="/other-setting"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src="./src/assets/menu-icon.svg"
                alt="Lainnya Icon"
                className="w-5 h-5"
              />
              <span>Lainnya</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-6">Tampilan</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Tema</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-md p-4 flex flex-col items-center cursor-pointer">
              <img
                src="../src/assets/light-icon.png"
                alt="Light Theme"
                className="mb-2"
              />
              <span>Light</span>
            </div>
            <div className="border rounded-md p-4 flex flex-col items-center cursor-pointer opacity-100">
              <img
                src="./src/assets/dark-icon.png"
                alt="Dark Theme"
                className="mb-2"
              />
              <span>Dark</span>
            </div>
            <div className="border rounded-md p-4 flex flex-col items-center cursor-pointer opacity-100">
              <img
                src="./src/assets/black-icon.png"
                alt="Black Theme"
                className="mb-2"
              />
              <span>Black</span>
            </div>
            <div className="border rounded-md p-4 flex flex-col items-center cursor-pointer opacity-100">
              <img
                src="./src/assets/auto-icon.png"
                alt="Auto Theme"
                className="mb-2"
              />
              <span>Auto</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 mb-2">Text size</label>
          <select className="border border-gray-300 rounded-md p-2 w-40">
            <option>16px</option>
            {/* Add more font size options as needed */}
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/beranda-login")}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={() => navigate("/beranda-login")}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
