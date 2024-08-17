import TaskModel from "../../models/task";

async function getAllTasks(id?: string) {
  if (id) {
    const task = await TaskModel.findById(id);
    if (task === null) return [];

    return [task];
  }

  return await TaskModel.find();
}

export default getAllTasks;
