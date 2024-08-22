import TaskModel from "../../models/task";
import { Task } from "../shared";

async function createTask(requestBody: Task) {
  const task = new TaskModel(requestBody);
  const result = await task.save();
  const response = result.toObject();

  return {
    id: task._id,
    title: response.title,
    description: response.description,
    status: response.status,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt,
  };
}

export default createTask;
