const axios = require("axios");

async function purolatorData(trackingNumber) {
  const response = await axios.post(
    "https://api.purolator.com/tracker/puro/json/shipment/search",
    `{"pins":[{"pin":"${trackingNumber}","sequenceID":1}],"searchOptions":{"includePrivacyDetail":false,"includeReference":true}}`,
    {
      headers: {
        authority: "api.purolator.com",
        accept: "application/vnd.puro.shipment+json",
        "accept-language": "en-CA",
        "content-type": "application/vnd.puro.shipment+json",
        origin: "https://www.purolator.com",
        referer: "https://www.purolator.com/",
        "sec-ch-ua":
          '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      },
    }
  );

  const data = await response.data;
  // const { id, service, origin, destination, status, details, events } =
  //   data.shipmentSearchResults[0];

  return {
    trackingNumber: data.shipmentSearchResults[0].searchCriteria.pin,
    parcelType: data.shipments[0].productDescription,
    reachedFinalEvent: data.shipments[0].shipmentDate && true,
    delivered: data.shipments[0].shipmentDate ? true : false,
    status: data.shipments[0].shipmentDate ? "Delivered" : "In Transit",
    shippedTimestamp: data.shipments[0].shipmentDate,
    expectedDeliveryTimestamp: data.shipments[0].originalEstimatedDeliveryDate,
    // attemptedDeliveryDate: events[events.length - 1],
    // deliveryDate: events[events.length - 1],
    // events: events,
    // origin: origin,
    // destination: destination,
  };
}
