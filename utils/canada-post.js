const axios = require("axios");

module.exports =  async function cpData (trackingNumber) {
  const API_URL = `https://www.canadapost-postescanada.ca/track-reperage/rs/track/json/package/${trackingNumber}/detail`;

  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Authorization: "Basic Og==",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    Referer: "https://www.canadapost-postescanada.ca/track-reperage/en",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
  };

  const response = await axios.get(API_URL, {
    headers: headers,
  });
  const data = await response.data;
  const {
    pin,
    productNmEn,
    finalEvent,
    delivered,
    status,
    shippedDateTime,
    expectedDlvryDateTime,
    attemptedDlvryDate,
    actualDlvryDate,
    events,
    addtnlOrigInfo,
    addtnlDestInfo,
  } = data;

  return {
    trackingNumber: pin,
    parcelType: productNmEn,
    reachedFinalEvent: finalEvent,
    delivered: delivered,
    status: status,
    shippedTimestamp: shippedDateTime,
    expectedDeliveryTimestamp: expectedDlvryDateTime.dlvryDate,
    attemptedDeliveryDate: attemptedDlvryDate,
    deliveryDate: actualDlvryDate,
    events: events,
    origin: addtnlOrigInfo,
    destination: addtnlDestInfo,
  };
}
