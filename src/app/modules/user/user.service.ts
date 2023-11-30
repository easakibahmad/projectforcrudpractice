import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const CreateStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  userData.role = "student";
  userData.id = "2030100001";
  const result = await UserModel.create(userData);

  if (Object.keys(result).length) {
    studentData.studentID = result.id;
    studentData.user = result._id;

    const newStudent = await StudentModel.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  CreateStudentIntoDB,
};
