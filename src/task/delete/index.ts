import TaskModel from "../../models/task";

async function deleteTask(id: string) {
  const task = await TaskModel.findByIdAndDelete(id);

  if (!task) {
    return undefined;
  }

  return task;
}

export default deleteTask;
