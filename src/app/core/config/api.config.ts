export const API_TMDB_BASE_URL="https://api.themoviedb.org/3";
export const API_TMDB_BASE_POSTER_URL="https://image.tmdb.org/t/p/original";

export const ApiConfig = {
    genre: {
        list: `${API_TMDB_BASE_URL}/genre/movie/list?language=en`,
    },
    newRelease: {
        list: `${API_TMDB_BASE_URL}/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    },
    recommendation: {
        list: `${API_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`
    },
    cta: {
        list: `${API_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`
    },
    movies: {
        byGenreId: (genreId: string) => `${API_TMDB_BASE_URL}/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
        list: `${API_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
        similar: (id: string) => `${API_TMDB_BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
        byId: (id: string) => `${API_TMDB_BASE_URL}/movie/${id}?language=en-US&page=1`,
        getVideo: (id: string) => `${API_TMDB_BASE_URL}/movie/${id}/videos?language=en-US`,
        search: (query: string) => `${API_TMDB_BASE_URL}/search/movie?query=${query}&include_adult=true&language=en-US&page=1`
    },

}