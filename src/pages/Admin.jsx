import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/FooterAdmin";
import NavbarAdmin from "../components/NavAdmin";
import Breadcrumbs from "../components/BreadCrumbs";

export default function Admin() {
  return (
    <div className="full-width">
      <NavbarAdmin>
        <Breadcrumbs />
        <Outlet />
        <FooterAdmin />
      </NavbarAdmin>
    </div>
  );
}
