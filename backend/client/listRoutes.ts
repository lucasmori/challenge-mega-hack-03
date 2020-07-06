"use strict";

import { ProductManager } from "./controllers/ProductManager";
import { UserManager } from "./controllers/UserManager";

module.exports = function (app: any) {
  const controller: ProductManager = new ProductManager();
  const users: UserManager = new UserManager();

  // Route the webservices
  app.route("/getProducts").post(controller.getProduct);

  // // Route the users
  app.route("/enrollAdmin").post(users.enrollAdmin);
  app.route("/registerUser").post(users.registerUser);
};
