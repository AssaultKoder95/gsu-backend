import { Router, Request, Response, NextFunction } from "express";
import * as taskController from "../task";
import { Task } from "../task/shared";
import {
  validateStatus,
  validateTask,
  validateTaskUpdate,
} from "../validators";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = validateTask(req.body);
    if (error) throw new Error(error.details[0].message);

    const newTask: Task = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    };

    const task = await taskController.createTask(newTask);

    return res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/search",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const searchTerm = req.query.q as string;
      const tasks = await taskController.searchTasks(searchTerm);
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/filter",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = req.query.status as Task["status"];

      const { error } = validateStatus({ status });
      if (error) throw new Error(error.details[0].message);

      const tasks = await taskController.filterTasks({ status });
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },
);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skip = req.query.skip as string;
    const limit = req.query.limit as string;
    const tasks = await taskController.getAllTasks({ skip, limit });
    return res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskController.getAllTasks({ id: req.params.id });
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = validateTaskUpdate(req.body);
    if (error) throw new Error(error.details[0].message);

    const foundTask = await taskController.getAllTasks({ id: req.params.id });

    if (!foundTask.length) {
      throw new Error("Task not found");
    }

    const taskToUpdate = {
      title: req.body.title || foundTask[0].title,
      description: req.body.description || foundTask[0].description,
      status: req.body.status || foundTask[0].status,
    };

    const task = await taskController.updateTask(req.params.id, taskToUpdate);

    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await taskController.deleteTask(req.params.id);
      return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
