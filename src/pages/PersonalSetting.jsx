import React from "react";
import { Link } from "react-router-dom";

const PersonalSetting = () => {
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
              className="flex items-center space-x-2 p-2 rounded-md bg-white hover:bg-green-200 transition duration-300 ease-in-out cursor-pointer"
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
        <h2 className="text-xl font-semibold mb-6">Pribadi</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="mochachmar.web7@infinitelearningstudent.id"
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">Nama</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              defaultValue="Moch Achmar"
            />
          </div>
          <div className="mt-6">
            <h3 className="font-medium text-red-600">Hapus Akun</h3>
            <p className="text-gray-500 mb-2">
              Hapus akun Anda dan semua datanya
            </p>
            <button
              type="button"
              className="bg-red-100 text-red-600 border border-red-600 rounded-md px-4 py-2"
            >
              Hapus Akun
            </button>
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

export default PersonalSetting;
