import express from "express";
import cors from "cors";
import contactAirwrksRouter from "./routes/ContactAirWrksRouter";

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/contactAirWrks", async (req, res) => {
//   console.log(req);
// });

app.use("/contactAirWrks", contactAirwrksRouter);

//
app.listen(4000, () => console.log(`listening on port ${4000}!`));
