import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import EmailCreate from "./pages/EmailCreate";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/create-with-email" element={<EmailCreate />} />
    </Routes>
  );
}

export default App;
