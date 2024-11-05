import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoTanamanKu from "../assets/logo2.png"; // Ganti dengan path logo Anda

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/beranda"); // Arahkan ke Beranda setelah 2 detik
    }, 2000); // Durasi splash screen

    return () => clearTimeout(timer); // Bersihkan timer saat unmount
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

export default SplashScreen;
