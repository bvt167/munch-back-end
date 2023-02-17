/**
 * Schema and model for a Publishing.
 */

import { Publish } from "../interface/Publish";
import { Schema } from 'mongoose';

const publishSchema = new Schema<Publish>({
  image_url: { type: String, required: true},
  is_carousel_item: { type: Boolean, required: true},
  caption: { type: String, required: true},
  isValidated: {type: Boolean, required: true}
});

export default publishSchema; 