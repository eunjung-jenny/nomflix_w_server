import express from "express";
import cors from "cors";
import movieRouter from "./routers/movieRouter";
import tvRouter from "./routers/tvRouter";
import searchRouter from "./routers/searchRouter";

const app = express();

app.use(cors());

const handleAccess = function (req, res) {
  res.status(200).json({ success: true });
};

app.use("/movie", movieRouter);
app.use("/tv", tvRouter);
app.use("/search", searchRouter);

export default app;
