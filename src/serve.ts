import bodyParser from "body-parser";
import express from "express";
import { context } from "./context";
import rateShipments from "./implementation/rate-shipments";
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/rates", async function (req, res) {
  const rateResult = await rateShipments(context, req.body);
  res.status(200).send(rateResult);
});

app.listen(port, function () {
  console.log("listening at http://localhost:%s", port);
});
