import React, { ReactElement } from "react";
import MainNavigation from "./main-navigation/main-navigation";
import Notifications from "./notifications";

function Layout({ children }) {
  return (
    <div className="flex">
      <div className="hidden lg:flex max-w-[200px]">
        <MainNavigation />
      </div>
      <main className="flex-auto">{children}</main>
    </div>
  );
}

export default Layout;
