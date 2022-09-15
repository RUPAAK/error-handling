import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

jest.setTimeout(1000000);

let mongod: any;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri);
});

afterEach(() => {
  // console.log("Test Finidi");
});

afterAll(async () => {
  await mongod.stop();
});
