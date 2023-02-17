# Munch Backend

## Description

Backend handles the account logic and calls Instagram's API to make posts based on user parameters.

## Endpoints

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
    "status": "success"
```
or
```json
    "status": "failure"
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
     "status": "success"
 ```
 or
 ```json
     "status": "failure"
 ```
 - **Error Handling:**
  - **400:** Missing body parameters, account not found, restaurant not validated
  - **500:** Error reading from database

### Post Single Image
  - **Use Case:** Posts a single image to Instagram.
  - **Type:** POST
  - **Endpoint:** /post/singleimage
  - **Parameters:** Body parameters of `imageUrl`, `caption`, `email`, and `password`.
  - **Return:** JSON
  - **Example Request:**
  URL/account/register
  Body:
  ```json
  {
      "imageUrl": "https//www.example.com/images/bronz-fonz.jpg",
      "caption": "testCaption",
      "email": "test",
      "password": "testPassword",
  }
  ```
  - **Example Response:**
  ```json
      "status": "success"
  ```
  or
  ```json
      "status": "failure"
  ```
  - **Error Handling:**
   - **400:** Missing body parameters, account not found
   - **500:** Error saving to database, Instagram API error
