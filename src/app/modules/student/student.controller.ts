import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const CreateStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentServices.CreateStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "student creation failed",
      error: error.message,
    });
  }
};
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
  CreateStudent,
  GetStudents,
  GetSingleStudent,
};
