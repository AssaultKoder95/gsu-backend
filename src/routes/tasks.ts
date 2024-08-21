import { Router, Request, Response } from "express";
import * as taskController from "../task";
import { Task } from "../task/shared";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const task = await taskController.createTask(req.body);
    res.status(201).json(task);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {

    const skip = req.query.skip as string;
    const limit = req.query.limit as string;
    const tasks = await taskController.getAllTasks({ skip, limit });
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const task = await taskController.getAllTasks({ id: req.params.id });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const task = await taskController.updateTask(req.params.id, req.body);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const task = await taskController.deleteTask(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/search', async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.q as string;
    const tasks = await taskController.searchTasks(searchTerm);
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/filter', async (req: Request, res: Response) => {
  try {
    const status = req.query.status as Task['status'];
    const tasks = await taskController.filterTasks({ status });
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
