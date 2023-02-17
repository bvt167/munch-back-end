import mongoose, { Model, Mongoose, Query } from "mongoose";
import AccountController from "../../src/controller/accountController";
import { Restaurant } from "../../src/interface/Restaurant";
import restaurantSchema from "../../src/database/RestaurantSchema";
import { ACCOUNT_ALREADY_REGISTERED, FAILURE, INVALID_BODY_PARAMETERS, INVALID_LOGIN, NON_VALIDATED_RESTAURANT, RESTAURANT, SUCCESS } from "../../src/constant/CommonConstants";
import { mock, mockDeep } from 'jest-mock-extended';
import { Request, Response, request } from "express";
import { getMockResponse } from "../util/Util";

let databaseController: AccountController;
let RestaurantModel: Model<Restaurant>;
const testNonValidatedRestaurantDocument: any = {
  "restaurantName": "testName",
  "email": "testEmail",
  "password": "testPassword",
  "jobTitle": "testJobTitle",
  "address": "testAddress",
  "isValidated": false
}
const testValidatedRestaurantDocument: any = {
  "restaurantName": "testName",
  "email": "testEmail",
  "password": "testPassword",
  "jobTitle": "testJobTitle",
  "address": "testAddress",
  "isValidated": true
}

beforeEach(async () => {
  RestaurantModel = mongoose.model(RESTAURANT, restaurantSchema);
  jest.spyOn(RestaurantModel, "create").mockReturnValue(await Promise.resolve());
  jest.spyOn(RestaurantModel, "findOne").mockReturnValue(testValidatedRestaurantDocument);
  const mongooseMock = mockDeep<Mongoose>();
  mongooseMock.model.mockReturnValue(RestaurantModel);
  databaseController = new AccountController(mongoose);
});

test(("register restaurant with correct parameters returns status 200"), async () => {
  jest.spyOn(RestaurantModel, "findOne").mockReturnValue(null as any);
  const body: any = {
    "restaurantName": "testName",
    "email": "testEmail",
    "password": "testPassword",
    "jobTitle": "testJobTitle",
    "address": "testAddress"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.jsonValue.status).toBe(SUCCESS);
});

test(("register restaurant with incorrect parameters returns status 400"), async () => {
  const body: any = {
    "restaurantNameName": "testName",
    "emailEmailEmail": "testEmail",
    "password": "testPassword",
    "jobTitle": "testJobTitle",
    "address": "testAddress"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_BODY_PARAMETERS);
});

test(("register restaurant with missing parameters returns status 400"), async () => {
  let body: any = {
    "restaurantName": "testName",
    "email": "testEmail",
    "password": "testPassword",
    "jobTitle": "testJobTitle",
  }

  let res = getMockResponse();
  let req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_BODY_PARAMETERS);

  body = {};
  res = getMockResponse();
  req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_BODY_PARAMETERS);
});

test(("register restaurant with existing registration returns status 400"), async () => {
  const body: any = {
    "restaurantName": "testName",
    "email": "testEmail",
    "password": "testPassword",
    "jobTitle": "testJobTitle",
    "address": "testAddress"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(ACCOUNT_ALREADY_REGISTERED);
});

test(("register restaurant with database error returns status 500"), async () => {
  jest.spyOn(RestaurantModel, "findOne").mockReturnValue(null as any);
  jest.spyOn(RestaurantModel, "create").mockImplementation(() => {
    throw new Error("Error accessing database");
  });
  const body: any = {
    "restaurantName": "testName",
    "email": "testEmail",
    "password": "testPassword",
    "jobTitle": "testJobTitle",
    "address": "testAddress"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.jsonValue.status).toBe(FAILURE);
});


test(("restaurant login with correct parameters returns status 200"), async () => {
  const body: any = {
    "email": "testEmail",
    "password": "testPassword"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(JSON.stringify(res.jsonValue)).toBe(JSON.stringify(testValidatedRestaurantDocument));
});

test(("restaurant login with invalid body parameters returns status 400"), async () => {
  let body: any = {
    "email": "testEmail"
  }
  const res = getMockResponse();
  const req = mockDeep<Request>();

  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_BODY_PARAMETERS);

  body = {
    "email": "testEmail",
    "passwordd": "testPassword"
  }
  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_BODY_PARAMETERS);
});

test(("restaurant login with invalid login returns status 400"), async () => {
  const body: any = {
    "email": "testEmaillllll",
    "password": "testPassword"
  }
  jest.spyOn(RestaurantModel, "findOne").mockReturnValue(null as any);
  const res = getMockResponse();
  const req = mockDeep<Request>();

  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(INVALID_LOGIN);
});

test(("restaurant login with non-validated restaurant returns status 400"), async () => {
  const body: any = {
    "email": "testEmail",
    "password": "testPassword"
  }
  jest.spyOn(RestaurantModel, "findOne").mockReturnValue(testNonValidatedRestaurantDocument);
  const res = getMockResponse();
  const req = mockDeep<Request>();

  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.jsonValue.status).toBe(NON_VALIDATED_RESTAURANT);
});

test(("restaurant login with database error returns status 500"), async () => {
  const body: any = {
    "email": "testEmail",
    "password": "testPassword"
  }
  jest.spyOn(RestaurantModel, "findOne").mockImplementation(() => {
    throw new Error("Error accessing database");
  });
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = body;
  await databaseController.loginRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.jsonValue.status).toBe(FAILURE);
});
