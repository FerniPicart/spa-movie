import getHash from "../utils/getHash";
import getMovie from "../utils/getMovie";
import getPersonajes from "../utils/getPersonajes";
//<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="img">
const Movie = async () => {
    const id = getHash();
    const movie = await getMovie(id);
    const cast = await getPersonajes(id);
    const view = `
        <div class="movie-card">
            <div class="movie-img">
                <img class="poster-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="img">
            </div>
            <div class="movie-info">
                <h2>${movie.original_title}</h2>
                <p>${movie.overview}</p><br>
                <h3>Año: </h3>
                <p>${movie.release_date}</p><br>
                <h3>Duración: </h3>
                <p>${movie.runtime} min.</p><br>
                <h3>Puntuación: </h3>
                <p>${movie.vote_average}</p><br>
                <h3>Géneros: </h3>
                <p>${movie.genres.map(gen => `${gen.name}` ).join(', ')}</p><br>
                <h3>Reparto: </h3>
                <p id="cast">${cast.cast.map(act => `${act.name}; `).join(' ')}</p>
            </div>
        </div>
    `;
    return view;
}

export default Movie;