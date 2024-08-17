import TaskModel from "../../models/task";
import { Task } from "../shared";

async function createTask(requestBody: Task) {
  const task = new TaskModel(requestBody);
  await task.save();
  return task;
}

export default createTask;
