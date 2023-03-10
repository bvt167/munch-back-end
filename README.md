# Munch Backend

## Description

Backend handles the account logic and calls Instagram's API to make posts based on user parameters. Front end is hosted [here](https://victorious-dune-0e5eed11e.2.azurestaticapps.net/).

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
