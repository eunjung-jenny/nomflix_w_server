import express from "express";
import {
  topRated,
  popular,
  airingToday,
} from "../controllers/tvController.js";

const tvRouter = express.Router();

tvRouter.get("/top_rated", topRated);

tvRouter.get("/popular", popular);

tvRouter.get("/airing_today", airingToday);

export default tvRouter;
