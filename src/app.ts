import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.routes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
// app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

const AppControllerFunction = (req: Request, res: Response) => {
  res.send("Hello World!");
};
app.get("/", AppControllerFunction);

export default app;
