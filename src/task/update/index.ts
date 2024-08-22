import TaskModel from "../../models/task";
import { Task } from "../shared";

async function updateTask(id: string, requestBody: Partial<Task>) {
  const task = await TaskModel.findByIdAndUpdate(id, requestBody, { new: true });

  if (!task) throw new Error('Task not found');

  return task;
}

export default updateTask;
