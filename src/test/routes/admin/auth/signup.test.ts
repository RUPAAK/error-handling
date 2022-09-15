import express from "express";
import request from "supertest";
import { app } from "../../../../app";

// const app = express();

test("if signup route exist or not", async () => {
  const res = await request(app).post("/api/v1/auth/signup");
  expect(res.status).not.toEqual(404);
});

it("should return 400 if email field is empty", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      name: "testing",
      password: "kathmandu",
    })
    .expect(400);
});

it("should return 400 if valid email is not provided", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "fjsdajfdosajfd",
      name: "testing",
      password: "kathmandu",
    })
    .expect(400);
});

it("should return 400 if name field is empty", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      password: "kathmandu",
    })
    .expect(400);
});

it("should return 400 if password field is empty", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
    })
    .expect(400);
});

it("should return 201 status after successfuly operation", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);
});

it("should return name and email", async () => {
  const res = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);
  expect(res.body.data.name).toBeDefined();
  expect(res.body.data.email).toBeDefined();
});

it("should return same name and same email", async () => {
  const res = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);
  expect(res.body.data.name).toEqual("Test");
  expect(res.body.data.email).toEqual("testemail@gmail.com");
});

it("should not return password", async () => {
  const res = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);
  expect(res.body.data.password).not.toBeDefined();
});

it("should not return _id but id and should not return __v", async () => {
  const res = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);
  expect(res.body.data._id).not.toBeDefined();
  expect(res.body.data.__v).not.toBeDefined();

  expect(res.body.data.id).toBeDefined();
});
