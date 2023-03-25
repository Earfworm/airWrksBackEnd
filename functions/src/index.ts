import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import contactAirwrksRouter from "./routes/ContactAirWrksRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/contactAirWrks", contactAirwrksRouter);
export const api = functions.https.onRequest(app);
