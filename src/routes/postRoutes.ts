/**
 * Sets up post routes.
 */

import { Router } from "express";
import PostController from "../controller/postController";

export default class PostRoutes {

  private router: Router;
  private controller: PostController;

  constructor(router: Router, controller: PostController) {
    this.router = router;
    this.controller = controller;

    router.post("/createpost", this.controller.createPost);
  }

  getRouter = (): Router => {
    return this.router;
  }

}
