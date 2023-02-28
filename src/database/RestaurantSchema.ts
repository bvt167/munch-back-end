/**
 * Schema and model for a Restaurant.
 */

import { Restaurant } from "../interface/Restaurant";
import { Schema } from "mongoose";

const restaurantSchema = new Schema<Restaurant>({
  restaurantName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  jobTitle: { type: String, required: true },
  address: { type: String, required: true },
  isValidated: { type: Boolean, required: true },
});

export default restaurantSchema;
