export async function getLatestGames() {
  const API_KEY = "bb76cc4c7646419db48e9e9008a21d41"; // Reemplaza con tu API Key
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating&page=1&page_size=24`;

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.results.map((game) => {
    const { name, released, background_image, rating, slug } = game;
    return {
      title: name,
      releaseDate: released,
      score: rating,
      slug: slug,
      image: background_image,
      description:
        "Descripción no disponible en esta lista porque no existe en la api que se esta consumiendo",
    };
  });
}

export async function getGameDetails(slug) {
  const API_KEY = "bb76cc4c7646419db48e9e9008a21d41";
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`;

  try {
    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();

    // Accede directamente a las propiedades necesarias del JSON
    const {
      name,
      description_raw,
      rating,
      background_image,
      released,
      metacritic,
      platforms,
    } = json;

    return {
      title: name, // Título del juego
      description: description_raw || "No hay descripción disponible.", // Descripción detallada
      score: rating, // Calificación del juego
      image: background_image, // Imagen del juego
      releaseDate: released, // Fecha de lanzamiento
      metacriticScore: metacritic, // Puntaje en Metacritic
      platforms: platforms.map((platform) => platform.platform.name), // Plataformas disponibles
    };
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null; // Retorna null en caso de error
  }
}
