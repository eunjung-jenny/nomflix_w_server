import express from "express";
import {
  nowPlaying,
  upcoming,
  topRated,
  popular,
  detail,
} from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/now_playing", nowPlaying);

movieRouter.get("/upcoming", upcoming);

movieRouter.get("/top_rated", topRated);

movieRouter.get("/popular", popular);

movieRouter.get("/:id", detail);

export default movieRouter;
