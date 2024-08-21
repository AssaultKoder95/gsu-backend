import TaskModel from "../../models/task";

type SearchParams = {
  id?: string;
  skip?: string;
  limit?: string;
};

async function getAllTasks({ id, skip, limit }: SearchParams) {
  if (id) {
    const task = await TaskModel.findById(id);
    if (task === null) return [];

    return [task];
  }

  if (skip && limit) {
    const skipParam = parseInt(skip, 10);
    const limitParam = parseInt(limit, 10);
    return TaskModel.find().skip(skipParam).limit(limitParam);
  }

  return TaskModel.find();
}

export default getAllTasks;
