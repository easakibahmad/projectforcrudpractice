import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-student", UserControllers.CreateStudent);

export const UserRoutes = router;
