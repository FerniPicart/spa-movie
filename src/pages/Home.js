import getTendencias from "../utils/getTendencias";
import getPopulares from "../utils/getPopulares";

const Home = async() => {
    const infoTendencias = await getTendencias();
    const infoPopulares = await getPopulares();
    const view = `
        <div class="movies">
            <article class="tendencias-movies">
                <section class="section-title">
                    <h2>TENDENCIAS</h2>
                </section>
                <section class="section-movie">
                    ${infoTendencias.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt=${movie.original_title}>
                                <h3>${movie.original_title}</h3>
                                <p>Puntuación: ${movie.vote_average}</p>
                            </a>
                        </div>
                       `
                    ).join('')}
                </section>
            </article>
            <article class="populares-movies">
                <section class="section-title">
                    <h2>POPULARES</h2>
                </section>
                <section class="section-movie">
                    ${infoPopulares.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt=${movie.original_title}>
                                <h3>${movie.original_title}</h3>
                                <p>Puntuación: ${movie.vote_average}</p>
                            </a>
                        </div>
                        `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Home;