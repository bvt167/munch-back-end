/**
 * Connects database routes to controller.
 */

import { Router } from 'express';
import DatabaseController from '../controller/databaseController';

export default class DatabaseRoutes {

  private router: Router;
  private controller: DatabaseController;

  constructor(router: Router, controller: DatabaseController) {
    this.router = router;
    this.controller = controller;

    router.post("/register", this.controller.registerRestaurant);
  }

  getRouter = (): Router => {
    return this.router;
  }

}
