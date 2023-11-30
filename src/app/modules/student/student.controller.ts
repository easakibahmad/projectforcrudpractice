import { Request, Response } from "express";
import { StudentServices } from "./student.service";


const GetStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.GetStudentsDataFromDB();
    res.status(200).json({
      status: true,
      message: "successfully retrieved students data",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetSingleStudent = async (req: Request, res: Response) => {
  const { studentID } = req.params;

  const result = await StudentServices.GetSingleStudentFromDB(
    parseInt(studentID, 10)
  );

  res.status(200).json({
    status: true,
    message: "student data retrieved successfully",
    data: result,
  });
};

export const StudentControllers = {
  GetStudents,
  GetSingleStudent,
};
