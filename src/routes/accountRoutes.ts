/**
 * Sets up account routes.
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
  }

  getRouter = (): Router => {
    return this.router;
  }

}
