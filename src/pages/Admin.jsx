import { Outlet, Link } from "react-router-dom";
import FooterAdmin from "../components/FooterAdmin";
import NavbarAdmin from "../components/NavAdmin";
import Breadcrumbs from "../components/BreadCrumbs";
import IconArtikel from "../assets/artikel.svg";
import IconPanduan from "../assets/panduan.svg";

export default function Admin() {
  // Placeholder untuk jumlah artikel dan panduan; nantinya bisa diganti dengan data dari backend
  const jumlahArtikel = 7; // angka imajiner untuk sementara
  const jumlahPanduan = 12; // angka imajiner untuk sementara

  return (
    <div className="full-width">
      <NavbarAdmin>
        <Breadcrumbs />
        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Dashboard Admin
          </h1>
          {/* Card Container */}
          <div className="flex gap-8 justify-center">
            {/* Artikel Card */}
            <div className="relative border border-green-500 rounded-lg p-6 w-60 text-center">
              {/* Badge Jumlah Artikel */}
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                {jumlahArtikel}
              </div>
              <img
                src={IconArtikel}
                alt="Artikel Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h2 className="font-bold text-lg text-gray-800 mb-2">Artikel</h2>
              <Link to="/admin/card-artikel">
                <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg mt-2 flex items-center justify-center text-center w-full hover:shadow-lg transition-shadow">
                  Selengkapnya
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>

            {/* Panduan Card */}
            <div className="relative border border-green-500 rounded-lg p-6 w-60 text-center">
              {/* Badge Jumlah Panduan */}
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                {jumlahPanduan}
              </div>
              <img
                src={IconPanduan}
                alt="Panduan Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h2 className="font-bold text-lg text-gray-800 mb-2">Panduan</h2>
              <Link to="/admin/card-panduan">
                <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg mt-2 flex items-center justify-center text-center w-full hover:shadow-lg transition-shadow">
                  Selengkapnya
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </NavbarAdmin>
      <FooterAdmin />
    </div>
  );
}

// BUAT BACKEND
// import { useEffect, useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import FooterAdmin from "../components/FooterAdmin";
// import NavbarAdmin from "../components/NavAdmin";
// import Breadcrumbs from "../components/BreadCrumbs";
// import IconArtikel from "../assets/artikel.svg";
// import IconPanduan from "../assets/panduan.svg";

// export default function Admin() {
//   // State untuk jumlah artikel dan panduan
//   const [jumlahArtikel, setJumlahArtikel] = useState(0);
//   const [jumlahPanduan, setJumlahPanduan] = useState(0);

//   useEffect(() => {
//     const fetchJumlahArtikel = async () => {
//       try {
//         const response = await fetch("/api/jumlah-artikel");
//         const data = await response.json();
//         setJumlahArtikel(data.jumlahArtikel);
//       } catch (error) {
//         console.error("Gagal mengambil jumlah artikel:", error);
//       }
//     };

//     const fetchJumlahPanduan = async () => {
//       try {
//         const response = await fetch("/api/jumlah-panduan");
//         const data = await response.json();
//         setJumlahPanduan(data.jumlahPanduan);
//       } catch (error) {
//         console.error("Gagal mengambil jumlah panduan:", error);
//       }
//     };

//     fetchJumlahArtikel();
//     fetchJumlahPanduan();
//   }, []);

//   return (
//     <div className="full-width">
//       <NavbarAdmin>
//         <Breadcrumbs />
//         <div className="p-6">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//             Dashboard Admin
//           </h1>
//           <div className="flex gap-8 justify-center">
//             <div className="relative border border-green-500 rounded-lg p-6 w-60 text-center">
//               <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
//                 {jumlahArtikel}
//               </div>
//               <img
//                 src={IconArtikel}
//                 alt="Artikel Icon"
//                 className="mx-auto mb-4 w-12 h-12"
//               />
//               <h2 className="font-bold text-lg text-gray-800 mb-2">Artikel</h2>
//               <Link to="/admin/card-artikel">
//                 <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg mt-2 flex items-center justify-center text-center w-full hover:shadow-lg transition-shadow">
//                   Selengkapnya
//                   <span className="ml-2">→</span>
//                 </button>
//               </Link>
//             </div>

//             <div className="relative border border-green-500 rounded-lg p-6 w-60 text-center">
//               <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
//                 {jumlahPanduan}
//               </div>
//               <img
//                 src={IconPanduan}
//                 alt="Panduan Icon"
//                 className="mx-auto mb-4 w-12 h-12"
//               />
//               <h2 className="font-bold text-lg text-gray-800 mb-2">Panduan</h2>
//               <Link to="/admin/card-panduan">
//                 <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg mt-2 flex items-center justify-center text-center w-full hover:shadow-lg transition-shadow">
//                   Selengkapnya
//                   <span className="ml-2">→</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <Outlet />
//       </NavbarAdmin>
//       <FooterAdmin />
//     </div>
//   );
// }
