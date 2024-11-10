import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import homeImage from "../assets/home.jpg";
import iconDetek from "../assets/ikondetek.png";
import iconUnduh from "../assets/ikonunduh.svg";
import iconGrow from "../assets/ikongrow.svg";
import imageMawar from "../assets/mawar.jpeg";
import imageMelati from "../assets/melati.jpeg";
import imageAnggrek from "../assets/anggrek.jpeg";
import tentangKamiImage from "../assets/tentangkami.jpg";

function Beranda() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Full-width Navbar */}
      <Navbar />

      {/* Full-width Hero Section */}
      <section className="relative w-full">
        <img
          src={homeImage}
          alt="Tanaman Hias"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="text-left text-white p-6 md:px-16 lg:px-32">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Solusi Perawatan
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Tanaman Hias
            </h2>
            <p className="max-w-lg text-sm md:text-base text-left">
              TanamanKu hadir sebagai solusi cerdas dalam merawat tanaman hias
              Anda. Dengan teknologi Artificial Intelligence (AI), aplikasi ini
              dapat membantu mendeteksi kesehatan tanaman, memberikan
              rekomendasi perawatan yang tepat, dan memastikan tanaman tumbuh
              optimal di lingkungan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Konten Tambahan dengan Styling Original */}
      <main className="flex-grow">
        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Fitur TanamanKu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div
                onClick={() => navigate("/ai-detection")}
                className="cursor-pointer bg-[#6D7E5E] p-6 rounded-lg shadow-md"
              >
                <img
                  src={iconDetek}
                  alt="AI Detection"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <p className="text-sm text-white text-left">
                  AI kami mampu mendeteksi berbagai penyakit dan hama yang dapat
                  menyerang tanaman Anda. Cukup unggah foto tanaman, dan sistem
                  kami akan memberikan diagnosis serta langkah-langkah
                  perawatan.
                </p>
              </div>
              <div
                onClick={() => navigate("/articles")}
                className="cursor-pointer bg-[#6D7E5E] p-6 rounded-lg shadow-md"
              >
                <img
                  src={iconUnduh}
                  alt="Articles"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <p className="text-sm text-white text-left">
                  Jelajahi berbagai artikel yang memberikan tips dan trik
                  perawatan tanaman hias. Dari pemula hingga ahli, temukan
                  inspirasi dan panduan yang tepat untuk menjaga tanaman Anda
                  tetap sehat dan subur.
                </p>
              </div>
              <div
                onClick={() => navigate("/guide-download")}
                className="cursor-pointer bg-[#6D7E5E] p-6 rounded-lg shadow-md"
              >
                <img
                  src={iconGrow}
                  alt="Guide Download"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <p className="text-sm text-white text-left">
                  Unduh panduan lengkap tips dan trik perawatan tanaman hias,
                  mulai dari pemula hingga ahli. Dapatkan inspirasi dan cara
                  tepat menjaga tanaman Anda tetap sehat dan subur!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-12 bg-[#E7F0DC]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Artikel</h2>
            <p className="text-center text-gray-900 mb-6">
              Kami menyediakan artikel / blog yang dapat anda akses mengenai
              informasi penyakit dan perawatan tanaman dari sumber terpercaya.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: imageMawar,
                  title: "Hama pada Bunga Mawar",
                  date: "Minggu, 25 Oktober 2024",
                },
                {
                  src: imageMelati,
                  title: "Hama pada Bunga Melati",
                  date: "Minggu, 25 Oktober 2024",
                },
                {
                  src: imageAnggrek,
                  title: "Penyakit Jamur pada Daun",
                  date: "Minggu, 25 Oktober 2024",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  onClick={() => navigate("/artikelsaatdibuka")}
                  className="cursor-pointer rounded-lg shadow-md overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.src})` }}
                >
                  <div className="h-48"></div>
                  <div className="bg-[#C4C8AD] bg-opacity-70 p-6 rounded-lg">
                    <p className="text-sm">{article.date}</p>
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-gray-900 mt-2 text-left">
                      Artikel ini membahas berbagai jenis hama yang sering
                      menyerang tanaman.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/artikel")}
              className="mt-6 bg-[#6D7E5E] text-white px-6 py-2 rounded-md border-2 border-[#45543D]"
            >
              Selengkapnya
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <img
              src={tentangKamiImage}
              alt="About TanamanKu"
              className="mx-auto object-cover rounded-lg shadow-md"
              style={{ width: "500px", height: "300px" }}
            />
            <div className="md:ml-8">
              <h2 className="text-3xl font-bold mb-4">
                Mengapa Memilih TanamanKu?
              </h2>
              <p className="text-gray-900 text-left">
                TanamanKu menggabungkan teknologi mutakhir dengan keindahan
                alam. AI kami didesain untuk memberikan panduan yang mudah
                dipahami oleh pemula, namun tetap akurat untuk para pecinta
                tanaman hias yang berpengalaman.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
}

export default Beranda;
