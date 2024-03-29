import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRegistration = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
    setIsMenuOpen(false); // Close the menu when toggling registration
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsRegistrationOpen(false); // Close the registration dropdown menu
  };

  return (
    <div className="sticky z-10">
      <div>
        <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                <img src={logo} className="w-32" alt="Flowbite Logo" />
              </a>
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen ? "true" : "false"}
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
              className={`w-full md:block md:w-auto ${
                isMenuOpen ? "" : "hidden"
              }`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
                <NavLink to="/" onClick={closeMenu}>
                  <li>
                    <a
                      href=""
                      className="block py-2 px-3 text-white hover:text-blue-700 rounded md:bg-transparent md:p-0"
                    >
                      Home
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/login" onClick={closeMenu}>
                  <li>
                    <a
                      href=""
                      className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      Login
                    </a>
                  </li>
                </NavLink>

                <li className="relative mb-3 md:mb-0 ">
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 flex items-center"
                    onClick={toggleRegistration}
                  >
                    Register
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </a>
                  <ul
                    className={`absolute top-full left-0  bg-gray-800 border border-gray-100 rounded-lg p-2 w-[13rem] ${
                      isRegistrationOpen ? "" : "hidden"
                    }`}
                  >
                    <NavLink to="/homeregistration" onClick={closeMenu}>
                      <li className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded-md">
                        Register Your Room
                      </li>
                    </NavLink>
                    <NavLink to="/studentregistration" onClick={closeMenu}>
                      <li className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded-md">
                        Register Your Self
                      </li>
                    </NavLink>
                  </ul>
                </li>
                <NavLink to="/about" onClick={closeMenu}>
                  <li>
                    <a
                      href=""
                      className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      About Us
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/helpsection" onClick={closeMenu}>
                  <li>
                    <a
                      href=""
                      className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      Help Section
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
