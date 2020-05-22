import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const handleAccess = function (req, res) {
  res.status(200).json({ success: true });
};

app.get("/api/*", handleAccess);

export default app;
