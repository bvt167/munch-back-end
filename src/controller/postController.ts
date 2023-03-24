/**
 * Handles post creation logic.
 */

import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { INVALID_BODY_PARAMETERS } from "../constant/CommonConstants";

export default class PostController {
  private mongoose: Mongoose;

  constructor(mongoose: Mongoose) {
    this.mongoose = mongoose;
  }

  createPost = async (req: Request, res: Response) => {
    try {
      if (!this.isValidCreatePostRequest(req.body)) {
        res.status(400).json({
          status: INVALID_BODY_PARAMETERS,
        });
        return;
      }
      // const containerIds: string[] = [];
      // const isCarouselItem: boolean = req.body.media.length > 1;
      // for (const media of req.body.media) {
      //   containerIds.push(await createItemContainer(media.type, media.url, isCarouselItem));
      // }
      console.log(process.env.ACCESS_TOKEN);

      res.status(200).json({
        postId: "123456789",
        accessToken: process.env.ACCESS_TOKEN
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: error,
      });
    }
  };

  private isValidCreatePostRequest = (body: any): boolean => {
    return body && body.media && body.caption && body.email && body.password;
  };
}
