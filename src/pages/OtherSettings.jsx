import React from "react";
import { Link } from "react-router-dom";

const OtherSettings = () => {
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
            <Link
              to="/other-setting"
              className="flex items-center space-x-2 p-2 rounded-md bg-white hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
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
        <h2 className="text-xl font-bold mb-6">Lainnya</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Bahasa</label>
          <select className="border border-gray-300 rounded-md p-2 w-40">
            <option>English</option>
            {/* Add more language options as needed */}
          </select>
        </div>

        <div className="flex items-center mb-4">
          <label className="text-gray-600 mr-4">
            Tampilkan keterangan alat
          </label>
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 rounded"
            checked
          />
        </div>

        <button className="bg-red-100 text-red-500 rounded-md px-4 py-2 mb-8">
          Setel ulang default
        </button>

        <div className="flex justify-end space-x-4">
          <button className="border border-gray-300 text-gray-700 rounded-md px-4 py-2">
            Batal
          </button>
          <button className="bg-green-500 text-white rounded-md px-4 py-2">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherSettings;
