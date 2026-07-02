export default async function handler(req, res) {
  const { timeUnit, startDate, endDate } = req.query;
  const API_KEY = process.env.SOLAREDGE_API_KEY;
  const SITE_ID = "4595713";

  if (!API_KEY) {
    return res.status(500).json({ error: "API_KEY no configurada" });
  }

  const url = `https://monitoringapi.solaredge.com/site/${SITE_ID}/energy?timeUnit=${timeUnit}&startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error conectando con SolarEdge" });
  }
}