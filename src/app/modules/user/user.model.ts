import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "active"],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<TUser>("User", UserSchema);
