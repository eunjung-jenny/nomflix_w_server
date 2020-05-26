import express from "express";
import { searchMovie } from "../controllers/movieController.js";
import { searchTV } from "../controllers/tvController.js";

const searchRouter = express.Router();

searchRouter.get("/movie/:term", searchMovie);

searchRouter.get("/tv/:term", searchTV);

export default searchRouter;
