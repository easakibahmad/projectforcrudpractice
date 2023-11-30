import { StudentModel } from "./student.model";


const GetStudentsDataFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const GetSingleStudentFromDB = async (studentID: number) => {
  const result = await StudentModel.findOne({ studentID });
  return result;
};

export const StudentServices = {
  GetStudentsDataFromDB,
  GetSingleStudentFromDB,
};
