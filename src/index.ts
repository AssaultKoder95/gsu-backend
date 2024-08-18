import dotenv from "dotenv";
import audit from "express-requests-logger";

import connectDB from "./dependencies/db";
import express, { Express } from "express";
import cors from "cors";

import taskRoutes from "./routes/tasks";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(
  audit({
    request: {
      maskBody: ["password"],
    },
  }),
);

app.use("/api/v1/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
