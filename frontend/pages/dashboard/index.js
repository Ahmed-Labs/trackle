import React, { Fragment, useState } from "react";
import MainNavigation from "../../components/layout/main-navigation/main-navigation";
import Layout from "../../components/layout/layout";
import Table from "../../components/tracking/table";
import styles from "./index.module.css";

function Dashboard() {
  return <Table />;
}

export default Dashboard;

Dashboard.getLayout = Layout;
