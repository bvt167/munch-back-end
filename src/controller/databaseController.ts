/**
 * Handles database related API logic.
*/

import { Model, Mongoose } from "mongoose";
import { Restaurant } from "../interface/Restaurant";
import { Request, Response } from "express";
import { FAILURE, RESTAURANT, SUCCESS } from "../constant/CommonConstants";
import RestaurantSchema from "../database/RestaurantSchema";

export default class DatabaseController {

  private mongoose: Mongoose;
  private RestaurantModel: Model<Restaurant>;

  constructor(mongoose: Mongoose) {
    this.mongoose = mongoose;
    this.RestaurantModel = this.mongoose.model(RESTAURANT, RestaurantSchema);
  }

  registerRestaurant = async (req: Request, res: Response) => {
    try {
      if (!this.isValidRequestBody(req.body)) {
        throw new Error("Invalid body parameters");
      }
      await this.RestaurantModel.create({
        restaurantName: req.body.restaurantName,
        email: req.body.email,
        password: req.body.password,
        jobTitle: req.body.jobTitle,
        address: req.body.address
      });
      return res.status(200).json({
        status: SUCCESS
      });
    } catch(error) {
      console.log(error);
      return res.status(501).json({
        status: FAILURE
      });
    }
  }

  private isValidRequestBody= (body: any): boolean => {
    return body && body.restaurantName && body.email && body.password && body.jobTitle && body.address;
  }

}
