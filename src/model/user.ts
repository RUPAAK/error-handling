import mongoose from "mongoose";
import { Role } from "../common/types/role";

interface UserAttrs {
  email: string;
  password: string;
  role: Role;
  name?: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

export interface UserDoc extends mongoose.Document, UserAttrs {
  email: string;
  password: string;
  role: Role;
  name?: string;

  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserDoc>(
  {
    email: String,
    password: String,
    role: {
      type: String,
      enum: Role,
      default: Role.user,
    },
    name: String,
  },
  {
    timestamps: true,
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
