import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
function Header() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      inputRef.current.checked = true;
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");
      inputRef.current.checked = true;
    }
  };

  const inputRef = useRef();

  const cart = useSelector((state) => state.Cart);

  return (
    <nav className=" bg-slate-100 border-gray-200 dark:bg-gray-600 dark:border-gray-700 fixed top-0 w-full z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-1 ">
        <div className=" flex justify-center items-center ">
          <Link
            to={""}
            className="flex items-center space-x-3 rtl:space-x-reverse me-4"
          >
            <span className="self-center text-xl md:text-3xl font-mono whitespace-nowrap dark:text-white">
              QuickCart{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 dark:text-gray-100 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 4h14a1 1 0 0 1 .97 1.243l-2.5 10A1 1 0 0 1 18.5 16H8.2l.3 1H19a1 1 0 1 1 0 2H7a1 1 0 0 1-.97-.757l-2-8A1 1 0 0 1 5 8h1.18l.82-4H3a1 1 0 1 1 0-2h4a1 1 0 0 1 .97.757L7.6 4zm1.65 2L8 10h10.37l1.8-7H8.65zM8.5 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </span>
          </Link>

          <label className="flex items-center   cursor-pointer   ">
            <input
              type="checkbox"
              ref={inputRef}
              value=""
              className="sr-only peer"
              onClick={() => toggleTheme()}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto my-1 "
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
            <li>
              <Link
                to={""}
                className="block py-1 px-2 text-white bg-blue-500 hover:bg-blue-700  rounded-lg  p-1 m-1 text-center transition-all duration-500"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to={"cart"}
                className="  py-1 px-2 text-white bg-blue-500 hover:bg-blue-700  rounded-lg  p-1 m-1 text-center transition-all duration-500 flex justify-center items-center"
              >
                Cart
                <span className="  bg-slate-800  rounded-full w-5 h-5  font-medium text-sm ms-2 flex justify-center items-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
