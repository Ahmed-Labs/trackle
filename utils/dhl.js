const axios = require("axios");

module.exports = async function dhlData(trackingNumber) {
  const API_URL = `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`;

  const headers = {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    "DHL-API-Key": process.env.DHL_KEY,
  };

  const response = await axios.get(API_URL, {
    headers: headers,
  });
  const data = await response.data;

  const { id, service, origin, destination, status, details, events } =
    data.shipments[0];

  return {
    trackingNumber: id,
    parcelType: service,
    reachedFinalEvent: status.status === "complete",
    delivered: status.status === "delivered",
    status: status,
    shippedTimestamp: events[0],
    expectedDeliveryTimestamp: events[events.length -1],
    attemptedDeliveryDate: events[events.length -1],
    deliveryDate: events[events.length -1],
    events: events,
    origin: origin,
    destination: destination,
  };
};
