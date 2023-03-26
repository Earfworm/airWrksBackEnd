import express from "express";
// import { ObjectId } from "mongodb";
import { getClient } from "../db";
import ContactAirWrks from "../models/ContactAirWrks";

const contactAirwrksRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

//create contact
contactAirwrksRouter.post("/", async (req, res) => {
  const newContact: ContactAirWrks = req.body;
  try {
    console.log(newContact, "beating the dead horse");

    const client = await getClient();
    const cursor = client
      .db()
      .collection<ContactAirWrks>("contactAirWrks")
      .insertOne(newContact);
    const results = await cursor;
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default contactAirwrksRouter;
