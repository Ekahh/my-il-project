import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function DeteksiPenyakit() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [plantName, setPlantName] = useState(''); // State for detected plant name

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      console.log('File yang diunggah:', file.name);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);

      // Simulate plant name recognition based on file name
      recognizePlant(file.name); // Call function to recognize the plant
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const recognizePlant = (fileName) => {
    // Basic simulation for plant detection based on filename keywords
    if (fileName.toLowerCase().includes('Tomat')) {
      setPlantName('Tomat');
    } else if (fileName.toLowerCase().includes('Sawi')) {
      setPlantName('Sawi');
    } else if (fileName.toLowerCase().includes('Pakcoy')) {
      setPlantName('Pakcoy');
    } else {
      setPlantName('Tanaman Tidak Dikenal'); // Default for unidentified plants
    }
  };

  const handleDeteksiClick = () => {
    navigate('/identifikasi-ai');
  };

  return (
    <div className="flex flex-col min-h-screen w-full m-0 p-0">
      {/* Navbar at the top */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center flex-grow p-4 md:p-14 bg-gray-50">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-8 md:mb-24 text-center">Mengenali penyakit pada tanaman anda</h1>

        <div className="w-full max-w-xl space-y-4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Jenis Tanaman</label>
          <input
            type="text"
            value={plantName} // Display detected plant name here
            placeholder="Jenis Tanaman"
            readOnly
            className="w-full border-b-2 border-gray-300 focus:border-gray-400 outline-none text-gray-600 placeholder-gray-400 py-2"
          />

          {/* Image Preview */}
          {previewImage && (
            <div className="mt-4">
              <img src={previewImage} alt="Preview" className="w-full h-auto max-h-64 object-cover rounded-lg border border-gray-300" />
            </div>
          )}

          {/* File Input (Hidden) */}
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />

          <div className="flex mt-8">
            <button className="flex items-center px-4 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100" onClick={handleUploadClick}>
              <span className="text-xl mr-2">+</span> Unggah Foto
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 ml-2">
              <span className="text-xl mr-2">+</span> Potret
            </button>
          </div>

          <div className="flex justify-end mt-8">
            <button className="w-full max-w-28 bg-[#6D7E5E] text-white font-semibold py-2 border border-white rounded-lg" onClick={handleDeteksiClick}>
              Deteksi
            </button>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}

      <Footer />
    </div>
  );
}

export default DeteksiPenyakit;
