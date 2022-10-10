module.exports = function detectCarrier(TRACKING_NUMBER) {
  const regPatterns = {
    CanadaPost: /^[0-9]{16}$|^[A-Z]{2}[0-9]{9}[A-Z]{2}$/,
    UPS: /\b(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\dT]\d\d\d ?\d\d\d\d ?\d\d\d)\b/,
    FedEx: /\b([0-9]{12}|100\d{31}|\d{15}|\d{18}|96\d{20}|96\d{32})\b/,
    DHL: /^[0-9]{10,11}$/,
  };
  for (const carrier in regPatterns) {
    if (regPatterns[carrier].test(TRACKING_NUMBER)) {
      return carrier;
    }
  }
  return null;
};
