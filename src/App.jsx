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
import TambahArtikel from "./pages/TambahArtikel";
import TambahPanduan from "./pages/TambahPanduan";
import IsiArtikel from "./pages/IsiArtikel";
import IsiPanduan from "./pages/IsiPanduan";
import EditArtikel from "./pages/EditArtikel";
import EditIsiArtikel from "./pages/EditIsiArtikel";
import AppearanceSettings from "./pages/AppearanceSettings";
import OtherSettings from "./pages/OtherSettings";
import EditPanduan from "./pages/EditPanduan";
import EditIsiPanduan from "./pages/EditIsiPanduan";
import PersonalSettingAdmin from "./pages/PersonalSettingAdmin";
import PasswordSettingAdmin from "./pages/PasswordSettingAdmin";
import OtherSettingAdmin from "./pages/OtherSettingAdmin";
import FormOtherSettingAdmin from "./pages/FormOtherSettingAdmin";
import ArticlesPage from "./pages/ArticlesPage";
import Article from "./pages/Article";
import Tentangkami from "./pages/Tentangkami";
import DeteksiPenyakit from "./pages/DeteksiPenyakit";
import IdentifikasiAi from "./pages/IdentifikasiAi";
import HistoryDeteksi from "./pages/HistoryDeteksi";
import Panduan from "./pages/Panduan";
import Tips from "./pages/Tips";

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
      <Route path="/artikel-penyakit-tanaman" element={<ArticlesPage />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/splash-login" element={<SplashScreenLogin />} />
      <Route path="/beranda-login" element={<BerandaLogin />} />
      <Route path="/personal-setting" element={<PersonalSetting />} />
      <Route path="/password-setting" element={<PasswordSetting />} />
      <Route path="/appearance-setting" element={<AppearanceSettings />} />
      <Route path="/other-setting" element={<OtherSettings />} />
      <Route path="/panduan" element={<Panduan />} />
      <Route path="/tips" element={<Tips />} />

      {/* Route Admin */}
      <Route path="/admin" element={<Admin />} />

      {/* Route Artikel */}
      <Route path="/admin/card-artikel" element={<AdminArtikel />} />
      <Route
        path="/admin/card-artikel/tambah-artikel"
        element={<TambahArtikel />}
      />
      <Route path="/admin/isi-artikel" element={<IsiArtikel />} />
      <Route
        path="/admin/card-artikel/edit-artikel"
        element={<EditArtikel />}
      />
      <Route
        path="/admin/isi-artikel/edit-isi-artikel"
        element={<EditIsiArtikel />}
      />
      <Route
        path="/admin/personal-setting"
        element={<PersonalSettingAdmin />}
      />
      <Route
        path="/admin/password-setting"
        element={<PasswordSettingAdmin />}
      />
      <Route path="/admin/other-setting" element={<OtherSettingAdmin />} />
      <Route
        path="/admin/form-other-setting"
        element={<FormOtherSettingAdmin />}
      />

      {/* Route Panduan */}
      <Route path="/admin/card-panduan" element={<AdminPanduan />} />
      <Route
        path="/admin/card-panduan/tambah-panduan"
        element={<TambahPanduan />}
      />
      <Route path="/admin/isi-panduan" element={<IsiPanduan />} />
      <Route
        path="/admin/card-panduan/edit-panduan"
        element={<EditPanduan />}
      />
      <Route
        path="/admin/isi-panduan/edit-isi-panduan"
        element={<EditIsiPanduan />}
      />

      {/* Route Tentang Kami */}
      <Route path="/tentang-kami" element={<Tentangkami />} />

      {/* Route Perawatamn */}
      <Route path="/deteksi-penyakit" element={<DeteksiPenyakit />} />
      <Route path="/identifikasi-ai" element={<IdentifikasiAi />} />
      <Route path="/histori-tanaman" element={<HistoryDeteksi />} />
      <Route path="/panduan" element={<Panduan />} />
      <Route path="/tips" element={<Tips />} />
    </Routes>
  );
}

export default App;
