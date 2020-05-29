import axios from "axios";

const api = axios.create({
  baseURL:
    "http://first-load-balancer-603173088.ap-northeast-2.elb.amazonaws.com/api/",
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
