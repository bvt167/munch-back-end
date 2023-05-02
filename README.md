# Munch Backend

## Description

Backend handles the account logic and calls Instagram's API to make posts based on user parameters. Front end is hosted [here](https://victorious-dune-0e5eed11e.2.azurestaticapps.net/).

## Continuing the Project

### Background

* Project uses node + Typescript + MongoDB + jest
  * Utilizes Mongoose to interact with MongoDB
* Originally hosted on Azure but will be taken down end of Spring 2023 per handoff procedure
* Handles account creation, login, and API calls to Facebook for post creation
  * Account data is stored as documents in MongoDB
  * Posts are intended to be published to a single Instagram account owned by the project owners
  * Post creation does not function as calling Facebook's endpoints involves a complicated process

### Structure

* Backend logic is split into distinct directories
* Bulk of the logic is in the `controller` and `routes` directories
  * `controller` contains the logic or the functions that execute when an endpoint is called
  * `routes` defines and hooks up routes with functions defined by the controllers
    * Ex: Associates the `registerRestaurant` function from `accountController.ts` with the `/register` route so whenever the `/register` endpoint is called, the `registerRestaurant` function will execute
  * `server.ts` additionally defines higher level routes for each route in the `routes` directory
    * Ex: the routes defined in `accountRoutes.ts` are defined under `/account` in `server.ts` so to called `/register` users would call `/account/register`
* `constant`: holds constants like strings, mainly for common error messages, urls, etc.
* `controller`: contains business logic for each endpoint
* `database`: contains files needed for MongoDB like schemas
* `interface`: contains interfaces
* `routes`: contains and defines endpoint routes like `/register`, `/login`, etc.
* `util`: contains utility classes and functions
* `server.ts` is the main entry point into the API
 * Connects to a MongoDB instance using Mongoose
 * Instantiates controllers and hooks them up to their respective routes
 * Creates the server
* `tst`: mirrors `/src` and contains unit tests for business logic

### Next Steps

* Create Instagram account to post to
* Complete Facebook processes and verifications to be able to call their endpoints to publish Instagram posts
  * Create development app with Facebook
  * Associate FB app with this project
  * Obtain permanent access token, more info [here](https://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token)
  * Complete FB app verification
    * Submit application documenting what endpoints will be called and why they are needed
    * Provide necessary demos
  * Complete FB business verification
    * Associate app with a business
    * Provide necessary business documents
  * Complete tech provider verification
    * Provide necessary documents proving associated business is a tech provider
  * Complete logic in `postController.ts` to call Facebook's endpoint
    * Should also complete logic to store each Restaurants' posts in their respective entry in the db
    * Should also include unit tests
* Find database solution
  * MongoDB recommended as the logic is already there to integrate with MongoDB
    * Would have to create account and new instance to connect to
* Add new controllers and routes as necessary for new features

## Links

* Hosted frontend web app: https://victorious-dune-0e5eed11e.2.azurestaticapps.net/
* Hosted backend: https://munch.azurewebsites.net/
* Frontend repository: https://github.com/bvt167/munch
* Final presentation: https://docs.google.com/presentation/d/1-EqW145BVskgbnMoF0iMW0xGzqYMrucp8-4sMCL25og/edit#slide=id.p

## Scripts

- `npm run dev`: Creates local server.
- `npm run build`: Compiles Typescript into Javascript in `build` directory.
- `npm run start`: Starts server from `build` directory.
- `npm run test`: Runs jest unit tests.

## Endpoints

### Base URL: https://munch.azurewebsites.net/

### Register
- **Use Case:** Register restaurant account.
- **Type:** POST
- **Endpoint:** /account/register
- **Parameters:** Body parameters of `restaurantName`, `email`, `password`, `jobTitle`, and `address`.
- **Return:** JSON
- **Example Request:**
URL/account/register
Body:
```json
{
    "restaurantName": "test",
    "email": "test",
    "password": "testPassword",
    "jobTitle": "testTitle",
    "address": "testAddress"
}
```
- **Example Response:**
```json
{
    "status": "success"
}
```
or
```json
{
    "status": "failure"
}
```
- **Error Handling:**
 - **400:** Missing body parameters, account already registered
 - **500:** Error saving to database

### Login
 - **Use Case:** Log into restaurant account.
 - **Type:** POST
 - **Endpoint:** /account/login
 - **Parameters:** Body parameters of `email`, and `password`.
 - **Return:** JSON
 - **Example Request:**
 URL/account/login
 Body:
 ```json
 {
     "email": "test",
     "password": "testPassword",
 }
 ```
 - **Example Response:**
 ```json
 {
     "status": "success"
 }
 ```
 or
 ```json
 {
     "status": "failure"
 }
 ```
 - **Error Handling:**
  - **400:** Missing body parameters, account not found, restaurant not validated
  - **500:** Error reading from database

### Create Post
  - **Use Case:** Publishes a post to Instagram.
  - **Type:** POST
  - **Endpoint:** /post/createpost
  - **Parameters:** Body parameters of `media`, `caption`, `email`, and `password`.
  - **Return:** JSON
  - **Example Request:**
  URL/account/register
  Body:
  ```json
  {
      "media": [
        {
          "type": "image",
          "url": "https//www.example.com/images/bronz-fonz.jpg"
        },
        {
          "type": "video",
          "url": "https//www.example.com/videos/bronz-fonz.mp4"
        }
      ],
      "caption": "testCaption",
      "email": "test",
      "password": "testPassword",
  }
  ```
  - **Example Response:**
  ```json
  {
      "status": "success"
  }
  ```
  or
  ```json
  {
      "status": "failure"
  }
  ```
  - **Error Handling:**
   - **400:** Missing body parameters, account not found
   - **500:** Error saving to database, Instagram API error
