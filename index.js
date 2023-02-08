import express from "express";
import { data } from "./data.mjs";
const app = express();

app.get("/letter/:id", (req, res) => {
  res.json(data.find((item) => item.id === Number(req.params.id)));
});

app.listen(3000);
