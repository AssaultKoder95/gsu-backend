import TaskModel from "../../models/task";

async function deleteTask(id: string) {
  const task = await TaskModel.findByIdAndDelete(id);

  if (!task) throw new Error("Task not found");

  return task;
}

export default deleteTask;
