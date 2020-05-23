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

export const detail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const { data } = await moviesApi.detail(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ data: null });
  }
};
