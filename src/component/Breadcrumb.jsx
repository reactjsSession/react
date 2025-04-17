 import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

   const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/main" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="">/</span>
              {isLast ? (
                <span className="text-gray-500">{decodeURIComponent(value)}</span>
              ) : (
                <Link to={to} className="text-blue-600 hover:underline">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
