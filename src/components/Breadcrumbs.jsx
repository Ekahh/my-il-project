import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Fungsi untuk mengganti "-" dengan spasi dan kapitalisasi kata
  const formatBreadcrumb = (str) => {
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-600">
        <li>
          <Link to="/admin" className="text-blue-500 hover:text-blue-700">
            Dashboard
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-700 font-semibold capitalize">
                  {formatBreadcrumb(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-blue-500 hover:text-blue-700 capitalize"
                >
                  {formatBreadcrumb(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
