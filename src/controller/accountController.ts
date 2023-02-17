/**
 * Handles database related API logic.
*/

import { Model, Mongoose } from "mongoose";
import { Restaurant } from "../interface/Restaurant";
import { Publish } from "../interface/Publish";
import { Request, Response } from "express";
import { ACCOUNT_ALREADY_REGISTERED, FAILURE, INVALID_BODY_PARAMETERS, INVALID_LOGIN, NON_VALIDATED_RESTAURANT, RESTAURANT, SUCCESS } from "../constant/CommonConstants";
import RestaurantSchema from "../database/RestaurantSchema";
import PublishSchema from "../database/PublishSchema"; 

export default class AccountController {

  private mongoose: Mongoose;
  private RestaurantModel: Model<Restaurant>;
  private PublishModel: Model<Publish>;

  constructor(mongoose: Mongoose) {
    this.mongoose = mongoose;
    this.RestaurantModel = this.mongoose.model(RESTAURANT, RestaurantSchema);
    this.PublishModel = this.mongoose.model(PUBLISH, PublishSchema);
  }

  registerRestaurant = async (req: Request, res: Response) => {
    try {
      if (!this.isValidRegisterRequest(req.body)) {
        return res.status(400).json({
          status: INVALID_BODY_PARAMETERS
        });
      }
      const restaurant = await this.RestaurantModel.findOne({
        email: req.body.email,
        password: req.body.password
      });
      if (restaurant) {
        return res.status(400).json({
          status: ACCOUNT_ALREADY_REGISTERED
        });
      }

      await this.RestaurantModel.create({
        restaurantName: req.body.restaurantName,
        email: req.body.email,
        password: req.body.password,
        jobTitle: req.body.jobTitle,
        address: req.body.address,
        isValidated: false
      });
      return res.status(200).json({
        status: SUCCESS
      });
    } catch(error) {
      console.log(error);
      return res.status(500).json({
        status: FAILURE
      });
    }
  }

  loginRestaurant = async(req: Request, res: Response) => {
    try {
      if (!this.isValidLoginRequest(req.body)) {
        return res.status(400).json({
          status: INVALID_BODY_PARAMETERS
        });
      }
      const restaurant = await this.RestaurantModel.findOne({
        email: req.body.email,
        password: req.body.password
      });

      if (!restaurant) {
        return res.status(400).json({
          status: INVALID_LOGIN
        });
      }

      if (!restaurant.isValidated) {
        return res.status(400).json({
          status: NON_VALIDATED_RESTAURANT
        });
      }

      return res.status(200).json(restaurant);
    } catch(error) {
      console.log(error);
      return res.status(500).json({
        status: FAILURE
      });
    }
  }

  postInstagram = async (req: Request, res: Response) => {
    try {
      if (!this.isValidPublishRequest(req.body)) {
        return res.status(401).json({
          status: INVALID_BODY_PARAMETERS
        });
      }
      await this.PublishModel.create({
        image_url: req.body.image_url,
        is_carousel_item: false,
        caption: req.body.caption,
        isValidated: false
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

  private isValidRegisterRequest = (body: any): boolean => {
    return body && body.restaurantName && body.email && body.password && body.jobTitle && body.address;
  }

  private isValidLoginRequest = (body: any): boolean => {
    return body && body.email && body.password;
  }

  private isValidPublishRequest = (body: any): boolean => {
    return body && body.image_url && body.is_carousel_item && body.caption;
  }

}
