import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

router.get("/all-students", StudentControllers.GetStudents);
router.get("/:studentID", StudentControllers.GetSingleStudent);

export const StudentRoutes = router;
