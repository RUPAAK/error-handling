import express from "express";
import request from "supertest";
import { app } from "../../../../app";

test("if signup route exist or not", async () => {
  const res = await request(app).get("/api/v1/auth/profile");
  expect(res.status).not.toEqual(404);
});

it("should return 401 if token is not provided", async () => {
  await request(app)
    .get("/api/v1/auth/profile")
    .set({
      // Authorization: `Bearer `
    })
    .expect(401);
});

it("should return 401 if token is provided but it is invalid", async () => {
  await request(app)
    .get("/api/v1/auth/profile")
    .set({
      Authorization: `Bearer invalidfjudas`,
    })
    .expect(401);
});

it("should return 403 if user tries to access this route", async () => {
  const res = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      email: "testemail@gmail.com",
      name: "Test",
      password: "kathmandu",
    })
    .expect(201);

  await request(app)
    .get("/api/v1/auth/profile")
    .set({
      authorization: `Bearer ${res.body.accessToken}`,
    })
    .expect(403);
});
