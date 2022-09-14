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

// it("should return 201 status after successfuly operation", async () => {
//  const res=  await request(app)
//     .post("/api/v1/auth/signup")
//     .send({
//       email: "testemail@gmail.com",
//       name: "Test",
//       password: "kathmandu",
//     })
//     // .expect(201);
//     console.log(res.body)
// });

// it("should return id insted of _idn", async () => {
//     await request(app)
//       .post("/api/v1/auth/signup")
//       .send({
//         email: "testemail@gmail.com",
//         name: "Test",
//         password: "kathmandu",
//       })
//       .expect(201);
//   });
