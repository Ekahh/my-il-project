import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tentangkami = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <img
            src="./src/assets/home.jpg" // Ensure this path is correct
            alt="Tanaman Hias"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white px-6 text-center">
              Alat Ramah Lingkungan untuk Hobi Berkebun
            </h2>
          </div>
        </section>

        <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Tentang Kami</h2>
            <div className="mt-2 h-1 w-24 mx-auto bg-[#6D7E5E] rounded"></div>
          </div>

          {/* Content Sections with Alternating Layout */}
          <div className="space-y-12">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 rounded-lg shadow bg-gray-50">
              <div className="w-full lg:w-1/2">
                <img
                  src="./src/assets/ttgkami.jpg"
                  alt="Tentang Kami 1"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-lg text-gray-700">
                  Menjadi platform digital terdepan dalam perawatan tanaman hias,
                  yang memanfaatkan teknologi AI untuk memberikan solusi cerdas
                  dan personal kepada setiap pecinta tanaman di seluruh dunia.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-6 rounded-lg shadow bg-gray-50">
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-lg text-gray-700">
                  Memberikan akses mudah ke teknologi AI yang mampu mendeteksi
                  penyakit dan pertumbuhan tanaman secara akurat, membantu
                  pengguna merawat tanaman dengan lebih baik.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src="./src/assets/ttgkami1.jpg"
                  alt="Tentang Kami 2"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 rounded-lg shadow bg-gray-50">
              <div className="w-full lg:w-1/2">
                <img
                  src="./src/assets/ttgkami2.jpg"
                  alt="Tentang Kami 3"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-lg text-gray-700">
                  Menyediakan panduan perawatan yang disesuaikan dengan kebutuhan
                  setiap jenis tanaman hias, dari pemula hingga ahli, melalui
                  artikel dan blog yang informatif.
                </p>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-6 rounded-lg shadow bg-gray-50">
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-lg text-gray-700">
                  Meningkatkan kesadaran akan pentingnya merawat tanaman hias
                  sebagai bagian dari gaya hidup hijau dan berkelanjutan.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src="./src/assets/ttgkami3.jpg"
                  alt="Tentang Kami 4"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Inspiration and Ideas Section */}
          <div className="mt-16 bg-[#E8E9E1] py-12 px-8 rounded-lg shadow border-t-4 border-[#6D7E5E]">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Inspirasi dan Ide</h3>
            <p className="text-gray-700 max-w-2xl mb-8 leading-relaxed">
              TanamanKu adalah platform inovatif berbasis AI yang dirancang untuk
              membantu Anda merawat tanaman hias dengan lebih mudah dan efektif.
              Mulai dari deteksi penyakit hingga panduan perawatan, TanamanKu
              memberikan solusi cerdas yang dapat diakses di mana saja.
            </p>

            <div className="flex justify-end gap-4">
              <button className="bg-[#6D7E5E] text-white py-2 px-6 rounded-md hover:bg-[#5c6b52] transition duration-300">
                Daftar
              </button>
              <button className="border border-[#45543D] text-black py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Tentangkami;
