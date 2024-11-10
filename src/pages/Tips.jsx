import React from "react";
import { Link } from "react-router-dom";
import { ArrowBackOutline, DownloadOutline } from "react-ionicons";
import "../index.css";
import tomat from "../assets/tomat.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tips = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Full-width Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow flex flex-col items-center w-full px-4 pb-8">
        {" "}
        {/* Menambahkan padding-bottom */}
        <div className="flex justify-between items-center w-full max-w-4xl mt-4 mb-6">
          {/* Tombol Kembali */}
          <Link
            to="/tips-perawatan-tanaman"
            className="flex items-center text-black font-semibold text-sm"
          >
            <ArrowBackOutline
              className="mr-2"
              color="black"
              height="20px"
              width="20px"
            />
            Kembali
          </Link>

          {/* Tombol Download */}
          <button
            className="px-4 py-2 font-semibold text-white rounded transition duration-300 flex items-center"
            style={{
              backgroundColor: "#6D7E5E",
              borderRadius: "10px",
              border: "2px #91A079 solid",
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#91A079")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6D7E5E")
            }
            onClick={() => alert("Download Berhasil!")}
          >
            <DownloadOutline
              className="mr-2"
              color="white"
              height="20px"
              width="20px"
            />
            Download
          </button>
        </div>
        {/* Card Konten Tips */}
        <div className="bg-white shadow-md border border-gray-400 rounded-lg p-6 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <img
              src={tomat}
              alt="tomat"
              className="mb-4 rounded w-full max-h-80 h-auto object-cover"
            />
            <h2 className="text-2xl font-bold mb-4 text-center mt-2 w-full">
              Tomat
            </h2>
            <p className="text-justify mb-4 mt-2 w-full">
              Tomat merupakan tumbuhan yang pertama kali ditemukan di Amerika
              Selatan, masih berkerabat dengan terung, kentang, dan paprika.
              Tomat termasuk buah karena strukturnya memiliki daging dan biji
              yang aman apabila tertelan. Buah tomat adalah buah buni, yang saat
              muda berwarna hijau dan memiliki bulu yang keras, dan saat matang
              berubah merah atau kuning mengkilat serta relatif lunak. Diameter
              buah tomat berkisar 4-15 cm, dengan rasa yang bervariasi mulai
              dari asam hingga asam manis.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-left mt-6 w-full">
              Tips & Trik
            </h2>
            <ul className="list-disc list-inside space-y-2 text-justify w-full">
              <li>
                Pencahayaan: Berikan sinar matahari 6-8 jam sehari, hindari
                paparan langsung yang berlebihan.
              </li>
              <li>
                Penyiraman: Siram secara rutin, biarkan lapisan atas tanah
                kering sebelum menyiram kembali untuk mencegah akar membusuk.
              </li>
              <li>
                Pemupukan: Gunakan pupuk seimbang setiap 4-6 minggu selama musim
                tanam untuk nutrisi optimal.
              </li>
              <li>
                Pemangkasan: Pangkas daun dan ranting mati secara teratur untuk
                menjaga bentuk tanaman dan sirkulasi udara.
              </li>
              <li>
                Periksa Hama: Cek secara rutin untuk hama dan gunakan
                insektisida alami jika perlu.
              </li>
              <li>
                Tanah: Gunakan tanah yang memiliki drainase baik dan kaya
                nutrisi.
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
};

export default Tips;
