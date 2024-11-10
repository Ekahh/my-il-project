import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavAdmin";
import FooterAdmin from "../components/FooterAdmin";
import Breadcrumbs from "../components/BreadCrumbs";

function EditIsiArtikel() {
  const navigate = useNavigate();

  // State untuk menyimpan data form
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  // Fungsi untuk menangani perubahan input gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Membuat URL untuk pratinjau gambar
      setImageName(file.name); // Menyimpan nama file untuk ditampilkan
    }
  };

  // Fungsi untuk menghapus gambar yang telah diunggah
  const handleRemoveImage = () => {
    setImage(null);
    setImageName("");
  };

  // Fungsi untuk mengirim artikel sebagai draft atau kirim (publish)
  const handleSubmit = (status) => {
    const newArticle = {
      title,
      subtitle,
      publisher,
      publishDate,
      content,
      image,
      status, // status: 'Draft' atau 'Publik' sesuai tombol yang diklik
    };

    console.log("Artikel baru yang dikirim:", newArticle);

    // Navigasi kembali ke halaman daftar artikel setelah submit
    navigate("/admin/card-artikel");
  };

  return (
    <div className="full-width bg-gray-100 min-h-screen">
      <NavbarAdmin>
        <Breadcrumbs />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Edit Isi Artikel
            </h2>

            {/* Input Judul Artikel */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-semibold mb-2 text-gray-700"
              >
                Judul Artikel
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-2 border border-green-500 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul Artikel"
              />
            </div>

            {/* Konten Artikel */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Konten Artikel
              </h3>

              {/* Input Subjudul */}
              <div className="mb-4">
                <label
                  htmlFor="subtitle"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Subjudul
                </label>
                <input
                  id="subtitle"
                  type="text"
                  className="w-full p-2 border border-green-500 rounded-md"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Subjudul Artikel"
                />
              </div>

              {/* Input Penerbit */}
              <div className="mb-4">
                <label
                  htmlFor="publisher"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Penerbit
                </label>
                <input
                  id="publisher"
                  type="text"
                  className="w-full p-2 border border-green-500 rounded-md"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                  placeholder="Penerbit Artikel"
                />
              </div>

              {/* Input Tanggal Terbit */}
              <div className="mb-4">
                <label
                  htmlFor="publishDate"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Tanggal Terbit
                </label>
                <input
                  id="publishDate"
                  type="date"
                  className="w-full p-2 border border-green-500 rounded-md"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                />
              </div>

              {/* Edit Deskripsi Singkat Artikel */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Deskripsi Singkat
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border border-green-500 rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Edit Deskripsi Singkat Artikel"
                />
              </div>

              {/* Edit Isi Artikel */}
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Isi Artikel
                </label>
                <textarea
                  id="content"
                  className="w-full p-2 border border-green-500 rounded-md"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Edit Isi Artikel"
                />
              </div>
            </div>

            {/* Input Gambar */}
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">
                Gambar
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="flex items-center border border-green-500 text-green-500 px-4 py-2 rounded-md cursor-pointer"
                >
                  {imageName || "Choose File"}
                </label>
              </div>
              {image && (
                <div className="mt-4">
                  <p className="text-gray-700 mb-2">Your Image</p>
                  <div className="relative">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={handleRemoveImage}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Hapus Gambar
                      </button>
                      <label
                        htmlFor="imageUpload"
                        className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                      >
                        Ganti Gambar
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => handleSubmit("Draft")}
                className="px-6 py-2 bg-blue-200 text-blue-700 rounded-md hover:bg-blue-300"
              >
                Draft
              </button>
              <button
                onClick={() => handleSubmit("Publik")}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </NavbarAdmin>
      <FooterAdmin />
    </div>
  );
}

export default EditIsiArtikel;
