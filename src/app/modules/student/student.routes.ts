import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

router.post("/create-student", StudentControllers.CreateStudent);
router.get("/all-students", StudentControllers.GetStudents);
router.get("/:studentID", StudentControllers.GetSingleStudent);

export const StudentRoutes = router;