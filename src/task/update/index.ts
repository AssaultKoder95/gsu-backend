import TaskModel from "../../models/task";
import { Task } from "../shared";

async function updateTask(id: string, requestBody: Partial<Task>) {
  return TaskModel.findByIdAndUpdate(id, requestBody, { new: true });
}

export default updateTask;
