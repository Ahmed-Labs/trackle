import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import SettingsComponent from "../../components/settings/settings-component";

function Settings() {
  return <SettingsComponent />;
}

export default Settings;

Settings.getLayout = Layout;
