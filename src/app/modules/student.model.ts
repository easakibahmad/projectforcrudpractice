import { Schema, model } from "mongoose";
import { TAddress, TLocalGuardian, TStudent } from "./student/student.interface";

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
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  studentID: { type: Number, required: true },
  major: { type: String, required: true },
  enrolledCourses: [{ type: String, required: true }],
  address: { type: AddressSchema, required: true },
  isInternationalStudent: { type: Boolean, required: true },
  graduationYear: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  permanentAddress: { type: AddressSchema, required: true },
  localGuardian: { type: LocalGuardianSchema },
} );

export const StudentModel = model<TStudent>('Student', StudentSchema);

