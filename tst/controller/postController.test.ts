import { mockDeep } from "jest-mock-extended";
import { Mongoose } from "mongoose";
import PostController from "../../src/controller/postController";
import { getMockResponse } from "../util/testUtil";
import { Request } from "express";

let postController: PostController;

const testCreatePostBody: any = {
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
    "password": "testPassword"
}

beforeEach(async () => {
  const mongooseMock = mockDeep<Mongoose>();
  postController = new PostController(mongooseMock);
})

test(("create post with correct parameters returns status 200"), async () => {
  const res = getMockResponse();
  const req = mockDeep<Request>();
  req.body = testCreatePostBody;

  await postController.createPost(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
});

test(("create post with incorrect parameters returns status 400"), async () => {
  const res = getMockResponse();
  const req = mockDeep<Request>();
  let testBody = testCreatePostBody;

  delete testBody.password;
  req.body = testBody;
  await postController.createPost(req, res);
  expect(res.status).toHaveBeenCalledWith(400);

  testBody = undefined;
  req.body = testBody;
  await postController.createPost(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
});
