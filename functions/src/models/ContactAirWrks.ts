import { ObjectId } from "mongodb";

export default interface ContactAirWrks {
  _id?: ObjectId;
  name: string;
  contactInfo: string;
  message: string;
}
