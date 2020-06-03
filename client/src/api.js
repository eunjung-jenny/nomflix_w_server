import axios from "axios";

const api = axios.create({
  baseURL: "https://my-first-domain.ml/api/",
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) => api.get(`movie/${id}`),
  search: (term) => api.get(`search/movie/${term}`),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) => api.get(`tv/${id}`),
  search: (term) => api.get(`search/tv/${term}`),
};
