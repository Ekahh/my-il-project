// SplashScreen.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoTanamanKu from "../assets/logo2.png";

const SplashScreenLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isReturningUser = localStorage.getItem("isReturningUser");

      if (isReturningUser) {
        navigate("/beranda-login"); // Jika pengguna sudah sign in sebelumnya, arahkan ke beranda
      } else {
        localStorage.setItem("isReturningUser", "true"); // Tandai pengguna sebagai sudah pernah masuk
        navigate("/beranda-login"); // Arahkan ke beranda pada awal
      }
    }, 2000); // Durasi splash screen

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, [navigate]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-tanamanku-2">
      <img
        className="w-1/2 max-w-[300px] md:max-w-[400px] lg:max-w-[500px] animate-fade-in"
        alt="Logo TANAMANKU"
        src={logoTanamanKu}
      />
    </div>
  );
};

export default SplashScreenLogin;
