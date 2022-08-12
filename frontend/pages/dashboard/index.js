import React, { Fragment, useState } from "react";
import MainNavigation from "../../components/layout/main-navigation/main-navigation";
import Layout from "../../components/layout/layout";
import Table from "../../components/tracking/table";

function Dashboard() {
  return <Table />;
}

export default Dashboard;

Dashboard.getLayout = Layout;
