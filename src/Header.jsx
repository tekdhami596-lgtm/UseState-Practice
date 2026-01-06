import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "./themecontext";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

export default function Header() {
  const { theme, ToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`bg-amber-400 m-0 p-4 w-100%  ${
          theme === "light"
            ? "text-black bg-orange-500"
            : "text-white bg-gray-800"
        }`}
      >
        <ul className="flex gap-4 text-xl ">
          <li>
            <Link to="/" className="hover:underline hover:text-blue-900">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="basic-counter"
              className="hover:underline hover:text-blue-900"
            >
              Basic-Counter
            </Link>
          </li>
          <li>
            <Link
              to="show-hide-text"
              className="hover:underline hover:text-blue-900"
            >
              Show-Hide-Text
            </Link>
          </li>
          <li>
            <Link
              to="array-tabs"
              className="hover:underline hover:text-blue-900"
            >
              Array Tabs
            </Link>
          </li>
          <li>
            <Link
              to="input-text"
              className="hover:underline hover:text-blue-900"
            >
              Input-text
            </Link>
          </li>
          <li>
            <Link to="todolist" className="hover:underline hover:text-blue-900">
              ToDo-list
            </Link>
          </li>
           <li>
            <Link to="fetchAPI" className="hover:underline hover:text-blue-900">
              Fetch-User-API
            </Link>
          </li>
           <li>
            <Link to="fetchloaderAPI" className="hover:underline hover:text-blue-900">
              Fetch-User-API-Loader
            </Link>
          </li>
           <li>
            <Link to="fetchproduct" className="hover:underline hover:text-blue-900">
              Fetch-Products-API
            </Link>
          </li>
        </ul>
        <div>
          <button onClick={ToggleTheme} className="flex items-center gap-2 cursor-pointer">
            {theme === "light" ? <FaMoon /> : <IoSunnySharp />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
