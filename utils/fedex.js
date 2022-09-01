const axios = require("axios");

async function fedexData(trackingNumber) {
  const API_URL = `https://api.fedex.com/track/v2/shipments`;

  const headers = {
    authority: "api.fedex.com",
    path: "/track/v2/shipments",
    scheme: "https",
    accept: "application/json",
    authorization: "Bearer l7b8ada987a4544ff7a839c8e1f6548eea",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
  };

  const payload = {
    appDeviceType: "WTRK",
    appType: "WTRK",
    supportCurrentLocation: true,
    trackingInfo: [
      {
        trackNumberInfo: {
          trackingCarrier: "",
          trackingNumber: trackingNumber,
          trackingQualifier: `2459737000~${trackingNumber}~FX`,
        },
      },
    ],
    uniqueKey: "",
  };
  const response = await axios.post(API_URL, payload, {
    headers: headers,
  }).catch(console.error);
  const data = await response.json();
  console.log(response);
}

fedexData("274003491024");
