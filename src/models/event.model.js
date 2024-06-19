import { Schema, model, models } from "mongoose";
const eventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDateTime: { type: Date, required: true, default: Date.now },
  endDateTime: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  isFree: { type: Boolean, required: true, default: false },
  imageUrl: { type: String, required: true },
  url: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
 
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
});
const Event = models.Event || model("Event", eventSchema);
export default Event;
