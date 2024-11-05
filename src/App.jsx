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
import BerandaLogin from "./pages/Beranda-Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/create-with-email" element={<EmailCreate />} />
      <Route path="/email-code" element={<EmailCode />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/splash-login" element={<SplashScreenLogin />} />
      <Route path="/beranda-login" element={<BerandaLogin />} />
    </Routes>
  );
}

export default App;
