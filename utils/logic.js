module.exports = function detectCarrier(TRACKING_NUMBER) {
  const regCanadaPost = /^[0-9]{16}$|^[A-Z]{2}[0-9]{9}[A-Z]{2}$/;
  const regUPS =
    /\b(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\dT]\d\d\d ?\d\d\d\d ?\d\d\d)\b/;
  const regFedEx = /\b([0-9]{12}|100\d{31}|\d{15}|\d{18}|96\d{20}|96\d{32})\b/;
  const regDHL = new RegExp("^[0-9]{10,11}$");

  if (regCanadaPost.test(TRACKING_NUMBER)) {
    return "CanadaPost";
  } else if (regUPS.test(TRACKING_NUMBER)) {
    return "UPS";
  } else if (regFedEx.test(TRACKING_NUMBER)) {
    return "FedEx";
  } else if (regDHL.test(TRACKING_NUMBER)) {
    return "DHL";
  }
  return null;
}




