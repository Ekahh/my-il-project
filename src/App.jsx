import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import EmailCreate from "./pages/EmailCreate";
import EmailCode from "./pages/EmailCode";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordCode from "./pages/ForgotPasswordCode";
import NewPassword from "./pages/NewPassword";
import Beranda from "./pages/Beranda";
import SplashScreen from "./pages/SplashScreen";
import SplashScreenLogin from "./pages/SplashScreenLogin";
import BerandaLogin from "./pages/BerandaLogin";
import SignInAdmin from "./pages/SignInAdmin";
import Admin from "./pages/Admin";
import AdminPanduan from "./pages/AdminPanduan";
import AdminArtikel from "./pages/AdminArtikel";
import PersonalSetting from "./pages/PersonalSetting";
import PasswordSetting from "./pages/PasswordSetting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/create-with-email" element={<EmailCreate />} />
      <Route path="/email-code" element={<EmailCode />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-in-admin" element={<SignInAdmin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/splash-login" element={<SplashScreenLogin />} />
      <Route path="/beranda-login" element={<BerandaLogin />} />
      <Route path="/personal-setting" element={<PersonalSetting />} />
      <Route path="/password-setting" element={<PasswordSetting />} />

      {/* Route Admin */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/card-panduan" element={<AdminPanduan />} />
      <Route path="/admin/card-artikel" element={<AdminArtikel />} />
    </Routes>
  );
}

export default App;
