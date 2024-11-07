import React from "react";
import { Link } from "react-router-dom";

const PasswordSetting = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-green-100 p-4 sm:p-6">
        <h2 className="text-lg font-bold">Pengaturan</h2>
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
              className="flex items-center space-x-2 p-2 rounded-md bg-white hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
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
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
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
            <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer">
              <img
                src="./src/assets/download-icon.svg"
                alt="Pengelola Unduhan Icon"
                className="w-5 h-5"
              />
              <span>Pengelola Unduhan</span>
            </div>
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
      <div className="flex-1 p-4 sm:p-8">
        <h2 className="text-xl font-semibold mb-6">Kata Sandi</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Kata Sandi Lama</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="************"
            />
          </div>
          <div>
            <label className="block font-medium">Kata Sandi Baru</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="************"
            />
          </div>
          <div>
            <label className="block font-medium">Konfirmasi Kata Sandi</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="************"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button type="button" className="border rounded-md px-4 py-2">
              Batal
            </button>
            <button
              type="submit"
              className="bg-green-700 text-white rounded-md px-4 py-2"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordSetting;
