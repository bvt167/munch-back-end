/**
 * Schema and model for a Restaurant.
 */

import { Restaurant } from "../interface/Restaurant";
import { Schema } from 'mongoose';

const restaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true }
});

export default restaurantSchema;
