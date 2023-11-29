import { StudentModel } from "./student.model";
import { TStudent } from "./student.interface";

const CreateStudentIntoDB = async (student: TStudent) => {
  if (await StudentModel.isUserExists(student.studentID)) {
    throw new Error("User already exists");
  }
  const result = await StudentModel.create(student);

  return result;
};

const GetStudentsDataFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const GetSingleStudentFromDB = async (studentID: number) => {
  const result = await StudentModel.findOne({ studentID });
  return result;
};

export const StudentServices = {
  CreateStudentIntoDB,
  GetStudentsDataFromDB,
  GetSingleStudentFromDB,
};
