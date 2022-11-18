import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ui/themeContext";

function SettingsComponent() {
  const [theme, setTheme] = useState("Light");
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div className={`h-full flex-auto dark:bg-slate-900 dark:text-gray-200 ${toggle && "dark"}`}>
      <div className={`p-10`}>
        <div className="flex h-20 items-center">
          <h1 className="font-semibold text-2xl">Settings</h1>
        </div>
        <div className="ml-4 flex flex-col fixed">
          <div className="py-3">
            <p className="font-semibold text-lg py-3">Theme</p>
            <div className="ml-4 py-2">
              <button
                onClick={toggleFunction}
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                {theme}{" "}
                <svg
                  class="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="block py-2 px-4 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-2 pb-2 ">
            <p className="font-semibold text-lg py-3">User profile</p>
            <div className="ml-4 py-2">
              <p className="font-semibold text-md">Email</p>
              <p className="my-2 text-md">test@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsComponent;
