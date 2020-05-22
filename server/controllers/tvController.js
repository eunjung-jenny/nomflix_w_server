import { tvApi } from "../api";

export const topRated = async (req, res) => {
  try {
    const {
      data: { results },
    } = await tvApi.topRated();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};

export const popular = async (req, res) => {
  try {
    const {
      data: { results },
    } = await tvApi.popular();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};

export const airingToday = async (req, res) => {
  try {
    const {
      data: { results },
    } = await tvApi.airingToday();
    res.status(200).json({ results });
  } catch (error) {
    res.status(404).json({ results: null });
  }
};
