import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
    },
    status: {
      type: String,
      enum: ["in-progress", "active"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<TUser>("User", UserSchema);
