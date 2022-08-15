function detectCarrier(TRACKING_NUMBER) {
  const regCanadaPost = /^[0-9]{16}$|^[A-Z]{2}[0-9]{9}[A-Z]{2}$/;
  const regUPS =
    /\b(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\dT]\d\d\d ?\d\d\d\d ?\d\d\d)\b/;
  const regFedEx = /\b([0-9]{12}|100\d{31}|\d{15}|\d{18}|96\d{20}|96\d{32})\b/;
  const regDHL = new RegExp("^[0-9]{10,11}$");

  if (regCanadaPost.test(TRACKING_NUMBER)) {
    return "Canada Post";
  }
  if (regUPS.test(TRACKING_NUMBER)) {
    return "UPS";
  }
  if (regFedEx.test(TRACKING_NUMBER)) {
    return "FedEx";
  }
  if (regDHL.test(TRACKING_NUMBER)) {
    return "DHL";
  }
  return "Carrier could not be detected";
}

const exampleNums = [
  "9586321748186329",
  "1Z5R89390357567127",
  "1Z879E930346834440",
  "1Z410E7W0392751591",
  "1Z8V92A70367203024",
  "1ZXX3150YW44070023",
  "986578788855",
  "477179081230",
  "799531274483",
  "9611020987654312345672",
  "274003491024",
  "8367382436704393",
  "8907166106065395",
];

for (i in nums) {
  console.log(exampleNums[i] + " : " + detectCarrier(exampleNums[i]));
}
