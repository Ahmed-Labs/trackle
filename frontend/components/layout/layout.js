import React, { ReactElement } from "react";
import MainNavigation from "./main-navigation/main-navigation";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
