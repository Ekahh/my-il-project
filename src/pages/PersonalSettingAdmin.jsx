import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lockIcon from '../assets/lock-icon.svg';
import userIcon from '../assets/user-icon.svg'; // Example icon for Pribadi
import otherIcon from '../assets/menu-icon.svg'; // Example icon for Lainnya

const PersonalSettingAdmin = () => {
  const [email, setEmail] = useState('admin123@gmail.com');
  const [name, setName] = useState('Moch Achmar');
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    // Handle personal info save logic
    console.log('Personal info updated');
    navigate('/admin');
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic
    console.log('Account deleted');
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-5">
        <div className="flex flex-col space-y-4">
          {/* Pribadi */}
          <Link to="/admin/personal-setting" className="hover:bg-gray-200 transition-all duration-300 p-3 rounded-md bg-white cursor-pointer">
            <img src={userIcon} alt="user" className="inline-block w-5 h-5 mr-2" />
            Pribadi
          </Link>

          {/* Kata Sandi */}
          <Link to="/admin/password-setting" className="hover:bg-gray-200 transition-all duration-300 p-3 rounded cursor-pointer">
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
          <h2 className="text-xl font-bold mb-4">Pribadi</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nama
              </label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="mt-6">
              <button type="button" className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg" onClick={handleDeleteAccount}>
                Hapus Akun
              </button>
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

export default PersonalSettingAdmin;
