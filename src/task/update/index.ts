import TaskModel from "../../models/task";
import { Task } from "../shared";

async function updateTask(id: string, requestBody: Partial<Task>) {
  const task = await TaskModel.findByIdAndUpdate(id, requestBody, {
    new: true,
  });

  if (!task) throw new Error("Task not found");

  const response = task.toObject();

  return {
    id: task._id,
    title: response.title,
    description: response.description,
    status: response.status,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt,
  };
}

export default updateTask;
