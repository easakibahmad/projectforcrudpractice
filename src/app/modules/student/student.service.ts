import { StudentModel } from "../student.model";
import { TStudent } from "./student.interface";

const CreateStudentIntoDB = async (student: TStudent) => {
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
