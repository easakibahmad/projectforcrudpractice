import { Request, Response } from "express";
import { UserServices } from "./user.service";

const CreateStudent = async (req: Request, res: Response) => {
  try {
    const {password, student: studentData} = req.body;
    const result = await UserServices.CreateStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error: any) {
    const { message } = error;
    res.status(500).json({
      success: false,
      message: "student creation failed",
      error: message,
    });
  }
};

export const UserControllers = {
  CreateStudent,
};
