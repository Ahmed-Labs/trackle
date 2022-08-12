import React, { ReactElement } from "react";
import MainNavigation from "./main-navigation/main-navigation";

function Layout({ children }) {
  return (
    <div className="flex">
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
