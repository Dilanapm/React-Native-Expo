export async function getLatestGames() {
  const API_KEY = "bb76cc4c7646419db48e9e9008a21d41"; // Reemplaza con tu API Key
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating&page=1&page_size=24`;

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.results.map((game) => {
    const { name, released, background_image, rating, id } = game;
    return {
      title: name,
      releaseDate: released,
      score: rating,
      slug: id,
      image: background_image,
      description: "Descripción no disponible en esta lista.",
    };
  });
}

export async function getGameDetails(slug) {
  const API_KEY = "bb76cc4c7646419db48e9e9008a21d41";
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { name, description_raw, rating, background_image } = json;

  return {
    title: name,
    description: description_raw, // Descripción detallada
    score: rating,
    image: background_image,
  };
}
