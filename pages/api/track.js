import { getTrackingData } from "../../utils/main";

export default async function handler(req, res) {
  const { trackingNumber } = req.body;

  if (req.method === "POST") {
    const data = await getTrackingData(trackingNumber);
    res.status(200).json(data);
  } else {
    res.status(200).json({ message: "This is a request" });
  }
}
