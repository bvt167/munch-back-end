/**
 * Connects database routes to controller.
 */

import { Router } from 'express';
import AccountController from '../controller/accountController';

export default class DatabaseRoutes {

  private router: Router;
  private controller: AccountController;

  constructor(router: Router, controller: AccountController) {
    this.router = router;
    this.controller = controller;

    router.post("/register", this.controller.registerRestaurant);
    router.post("/login", this.controller.loginRestaurant);
    router.post("/publish", this.controller.postInstagram);
  }

  getRouter = (): Router => {
    return this.router;
  }

}
