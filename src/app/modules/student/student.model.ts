import { Schema, model } from "mongoose";
import {
  TAddress,
  TLocalGuardian,
  TStudent,
  UserStaticModel,
} from "./student.interface";
import validator from "validator";

const AddressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const StudentSchema = new Schema<TStudent>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "First name must contain only alphabetic characters.",
    },
    set: (value: string) => value.toUpperCase(),
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "First name must contain only alphabetic characters.",
    },
    set: (value: string) => value.toUpperCase(),
  },
  dateOfBirth: { type: Date, required: [true, "Date of birth is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  phoneNumber: { type: String, trim: true },
  studentID: {
    type: Number,
    required: [true, "Student ID is required"],
    unique: true,
  },
  major: { type: String, required: [true, "Major is required"], trim: true },
  enrolledCourses: [
    {
      type: String,
      required: [true, "At least one course is required"],
      trim: true,
    },
  ],
  address: {
    type: AddressSchema,
    required: [true, "Address is required"],
    validate: [
      {
        validator: (value: TAddress) =>
          value.street && value.city && value.zipCode,
        message:
          "All properties (street, city, zip code) are required for the address.",
      },
    ],
  },
  isInternationalStudent: {
    type: Boolean,
    required: [true, "International status is required"],
  },
  graduationYear: {
    type: Number,
    required: [true, "Graduation year is required"],
    min: 2023,
    max: 2030,
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood group is required"],
    trim: true,
    maxlength: 3,
  },
  permanentAddress: {
    type: AddressSchema,
    required: [true, "Permanent address is required"],
    validate: [
      {
        validator: (value: TAddress) =>
          value.street && value.city && value.zipCode,
        message:
          "All properties (street, city, zip code) are required for the address.",
      },
    ],
  },
  localGuardian: { type: LocalGuardianSchema },
});

// creating a custom static method
StudentSchema.statics.isUserExists = async function (studentID: number) {
  const existingUser = await StudentModel.findOne({ studentID });
  return existingUser;
};

export const StudentModel = model<TStudent, UserStaticModel>(
  "Student",
  StudentSchema
);
