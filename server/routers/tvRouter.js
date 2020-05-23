import express from "express";
import {
  topRated,
  popular,
  airingToday,
  detail,
} from "../controllers/tvController.js";

const tvRouter = express.Router();

tvRouter.get("/top_rated", topRated);

tvRouter.get("/popular", popular);

tvRouter.get("/airing_today", airingToday);

tvRouter.get("/:id", detail);

export default tvRouter;
