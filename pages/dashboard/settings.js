import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import SettingsComponent from "../../components/settings/settings-component";

function Settings() {
  const [trackingNumber, setTrackingNumber] = useState();
  function getData() {
    const tr = "RN555339551CA";

    fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ trackingNumber: tr }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTrackingNumber(data.data);
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return <SettingsComponent data={trackingNumber} />;
}

export default Settings;

Settings.getLayout = Layout;
