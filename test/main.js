const cpData = require("./canada-post.js");
const dhlData = require("./dhl.js");
const detectCarrier = require("./logic.js");

async function getTrackingData(TRACKING_NUMBER) {
  const carrier = detectCarrier(TRACKING_NUMBER);
  console.log(carrier);
  if (!carrier) {
    return null;
  }
  let data = null;
  switch (carrier) {
    case "CanadaPost":
      data = await cpData(TRACKING_NUMBER);
      break;
    case "DHL":
      data = await dhlData(TRACKING_NUMBER);
      break;
  }

  return data;
}

async function lego(tr) {
    const d = await getTrackingData(tr)
  console.log(d);
}

