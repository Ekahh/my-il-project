import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import kembaliIcon from "../assets/settings-icon.svg"; // Add the kembali icon
import lockIcon from "../assets/lock-icon.svg";
import userIcon from "../assets/user-icon.svg";
import otherIcon from "../assets/menu-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";

const OtherSettingAdmin = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    console.log(`User ${selectedUser} has been deleted.`);
    setShowDeletePopup(false);
    setSelectedUser(null);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="w-full md:w-1/4 bg-gray-100 p-5">
        <div className="flex flex-col space-y-4">
          <Link to="/admin" className="flex items-center space-x-2">
            <img src={kembaliIcon} alt="Kembali Icon" className="w-5 h-5" />
            <h2 className="text-lg font-bold">Pengaturan</h2>
          </Link>
          {/* Pribadi */}
          <Link
            to="/admin/personal-setting"
            className="hover:bg-gray-200 transition-all duration-300 p-3 rounded cursor-pointer flex items-center"
          >
            <img
              src={userIcon}
              alt="user"
              className="inline-block w-5 h-5 mr-2"
            />
            Pribadi
          </Link>

          {/* Kata Sandi */}
          <Link
            to="/admin/password-setting"
            className="hover:bg-gray-200 transition-all duration-300 p-3 rounded cursor-pointer flex items-center"
          >
            <img
              src={lockIcon}
              alt="lock"
              className="inline-block w-5 h-5 mr-2"
            />
            Kata Sandi
          </Link>

          {/* Lainnya */}
          <Link
            to="/admin/other-setting"
            className="hover:bg-gray-200 transition-all duration-300 p-3 rounded-md bg-white cursor-pointer flex items-center"
          >
            <img
              src={otherIcon}
              alt="others"
              className="inline-block w-5 h-5 mr-2"
            />
            Lainnya
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Lainnya</h2>

        {/* Add User and Cancel Buttons */}
        <div className="flex space-x-4 mb-4">
          {/* Batal Button */}
          <button
            onClick={() => navigate("/admin/")} // Go back to the previous page
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
          >
            Kembali
          </button>

          {/* Tambah User Button */}
          <Link
            to="/admin/form-other-setting"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-300"
          >
            + Tambah User
          </Link>
        </div>

        {/* User Table */}
        <table className="w-full border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">No</th>
              <th className="p-3 border-b">Username</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Nama</th>
              <th className="p-3 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">1</td>
              <td className="p-3 border-b">Admin2</td>
              <td className="p-3 border-b">Admin2@gmail.com</td>
              <td className="p-3 border-b">Sarah Isnaini Alnauri</td>
              <td className="p-3 border-b">
                <button
                  onClick={() => handleDeleteClick("Admin2")}
                  className="hover:bg-gray-200 p-2 rounded transition-all duration-300"
                >
                  <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Delete Confirmation Popup */}
        {showDeletePopup && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
              <h3 className="text-lg font-semibold mb-4">
                Apakah Anda yakin ingin menghapus akun ini?
              </h3>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-300"
                >
                  Hapus
                </button>
                <span className="text-gray-500">atau</span>
                <button
                  onClick={cancelDelete}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-all duration-300"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherSettingAdmin;
