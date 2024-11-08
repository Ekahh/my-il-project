import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import lockIcon from '../assets/lock-icon.svg'; // Example icon
import userIcon from '../assets/user-icon.svg'; // Example icon for Pribadi
import otherIcon from '../assets/menu-icon.svg'; // Example icon for Lainnya

const PasswordSettingAdmin = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    // Handle password change logic
    console.log('Password updated');
    navigate('/admin');
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-5">
        <div className="flex flex-col space-y-4">
          {/* Pribadi */}
          <Link to="/admin/personal-setting" className="hover:bg-gray-200 transition-all duration-300 p-3 rounded cursor-pointer">
            <img src={userIcon} alt="user" className="inline-block w-5 h-5 mr-2" />
            Pribadi
          </Link>

          {/* Kata Sandi */}
          <Link to="/admin/password-setting" className="hover:bg-gray-200 transition-all duration-300 p-3 rounded-md bg-white cursor-pointer">
            <img src={lockIcon} alt="lock" className="inline-block w-5 h-5 mr-2" />
            Kata Sandi
          </Link>

          {/* Lainnya */}
          <Link to="/admin/other-setting" className="hover:bg-gray-200 transition-all duration-300 p-3 rounded cursor-pointer">
            <img src={otherIcon} alt="others" className="inline-block w-5 h-5 mr-2" />
            Lainnya
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Kata sandi</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="oldPassword" className="block text-sm font-medium">
                Kata Sandi Lama
              </label>
              <input type="password" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium">
                Kata Sandi Baru
              </label>
              <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Konfirmasi Kata Sandi
              </label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={() => navigate('/admin')} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg">
                Batal
              </button>
              <button type="button" onClick={handleSaveChanges} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordSettingAdmin;
