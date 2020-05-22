import { moviesApi } from "../api";

export const nowPlaying = async (req, res) => {
  try {
    const {
      data: { results },
    } = await moviesApi.nowPlaying();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};

export const upcoming = async (req, res) => {
  try {
    const {
      data: { results },
    } = await moviesApi.upcoming();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};

export const topRated = async (req, res) => {
  try {
    const {
      data: { results },
    } = await moviesApi.topRated();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};

export const popular = async (req, res) => {
  try {
    const {
      data: { results },
    } = await moviesApi.popular();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};
