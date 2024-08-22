import TaskModel from "../../models/task";

type SearchParams = {
  id?: string;
  skip?: string;
  limit?: string;
};

async function getAllTasks({ id, skip, limit }: SearchParams) {
  const tasks = [];

  if (id) {
    const task = await TaskModel.findById(id);
    if (!task) throw new Error("Task not found");

    tasks.push(task);
  }

  if (skip && limit) {
    const skipParam = parseInt(skip, 10);
    const limitParam = parseInt(limit, 10);
    const result = await TaskModel.find()
      .sort({ createdAt: -1 })
      .skip(skipParam)
      .limit(limitParam);

    if (result !== null) {
      tasks.push(...result);
    }
  } else {
    const result = await TaskModel.find().sort({ createdAt: -1 });

    if (result !== null) {
      tasks.push(...result);
    }
  }

  if (tasks.length === 0) return [];

  return tasks.map((task) => {
    return {
      id: task._id,
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  });
}

export default getAllTasks;
