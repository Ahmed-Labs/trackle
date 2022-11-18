import React, { ReactElement, useContext } from "react";
import MainNavigation from "./main-navigation/main-navigation";
import { ThemeContext } from "../ui/themeContext";

function Layout({ children }) {
  const { toggle } = useContext(ThemeContext)
  return (
    <div className={`flex ${toggle && "dark"}`}>
      <div className="hidden lg:flex max-w-[200px]">
        <MainNavigation />
      </div>
      <main className="flex-auto">{children}</main>
    </div>
  );
}

export default Layout;
