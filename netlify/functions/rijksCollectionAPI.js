exports.handler = async (event) => {
  try {
    const { involvedMaker, page } = event.queryStringParameters || {};

    const apiKey = process.env.REACT_APP_RIJKS_API_KEY;

    const url = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&involvedMaker=${involvedMaker}&p=${page || 4}`;

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
