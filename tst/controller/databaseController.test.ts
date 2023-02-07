import mongoose, { Model, Mongoose } from "mongoose";
import DatabaseController from "../../src/controller/databaseController";
import { Restaurant } from "../../src/interface/Restaurant";
import restaurantSchema from "../../src/database/RestaurantSchema";
import { RESTAURANT } from "../../src/constant/CommonConstants";
import { mock, mockDeep } from 'jest-mock-extended';
import { Request, Response, request } from "express";
import { getMockResponse } from "../util/Util";

let databaseController: DatabaseController;
let RestaurantModel: Model<Restaurant>;

beforeEach(() => {
  RestaurantModel = mongoose.model(RESTAURANT, restaurantSchema);
  const mongooseMock = mockDeep<Mongoose>();
  mongooseMock.model.mockReturnValue(RestaurantModel);
  databaseController = new DatabaseController(mongoose);
});

test(("registers restaurant with correct parameters returns status 200"), async () => {
  jest.spyOn(RestaurantModel, "create").mockReturnValue(await Promise.resolve());
  const body: Restaurant = {
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
});

test(("registers restaurant with incorrect parameters returns status 501"), async () => {
  jest.spyOn(RestaurantModel, "create").mockReturnValue(await Promise.resolve());
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
  expect(res.status).toHaveBeenCalledWith(501);
});

test(("registers restaurant with missing parameters returns status 501"), async () => {
  jest.spyOn(RestaurantModel, "create").mockReturnValue(await Promise.resolve());
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
  expect(res.status).toHaveBeenCalledWith(501);

  body = {};
  res = getMockResponse();
  req = mockDeep<Request>();
  req.body = body;
  await databaseController.registerRestaurant(req, res);
  expect(res.status).toHaveBeenCalledWith(501);
});
