import express from "express";
import fetch from "node-fetch";

import * as db from "./db.mjs";

const donationDataRouter = express.Router();

donationDataRouter.get("/", async (request, response) => {
  const donationData = await db.getDonationData();
  response.json(donationData);
  console.log(donationData)
});

donationDataRouter.use(express.json());
// donationDataRouter.post("/", async (request, response) => {
//   const donation = await db.addDonation(request.body);
//   response.status(201).json(donation);
//   console.log(donation);
// });

export default donationDataRouter;
