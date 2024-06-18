import { Schema, models, model } from "mongoose";

const orderSchema = new Schema({
 stripeId: { type: String, required: true },
 buyer:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
 },
 event:{
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true
 },
 createdAt: { type: Date, default: Date.now },
 totalAmount:{
    type:string,
    required: true
 }
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
