const axios = require("axios");

const trackingNumber = "7777777770";

async function getData(trackingNumber) {
  const API_URL = `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`;

  const headers = {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    "DHL-API-Key": "2P5rR6AfvkVeqYwjkHwZcWSQGruCO7w0",
  };

  const response = await axios.get(API_URL, {
    headers: headers,
  });
  const data = await response.data;
  return data;
}

function parseData(data) {
  const { id, service, origin, destination, status, details, events } =
    data.shipments[0];
  return {
    trackingNumber: id,
    parcelType: service,
    reachedFinalEvent: status.status === "complete",
    delivered: status.status === "delivered",
    status: status,
    shippedTimestamp: events[0],
    expectedDeliveryTimestamp: events[-1],
    attemptedDeliveryDate: events[-1],
    deliveryDate: events[-1],
    events: events,
    origin: origin,
    destination: destination,
  };
}
const parse = getData(trackingNumber).then((data) => {
  console.log(parseData(data));
});
