exports.handler = async (event) => {
  try {
    const { language, colorHex } = event.queryStringParameters || {};

    if (!colorHex) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "colorHex parameter is required" }),
      };
    }

    const apiKey = process.env.REACT_APP_RIJKS_API_KEY;
    const lang = language === "en" ? "en" : "nl";

    const url = `https://www.rijksmuseum.nl/api/${lang}/collection?key=${apiKey}&ps=100&f.normalized32Colors.hex=%23${colorHex
      .toUpperCase()
      .replace("#", "")}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Rijksmuseum API" }),
    };
  }
};
