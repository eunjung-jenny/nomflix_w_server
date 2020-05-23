import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  detail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  detail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
