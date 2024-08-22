import TaskModel from "../../models/task";
import { Task } from "../shared";

type SearchParams = {
  status: Task["status"];
};

async function filterTaskByStatus({ status }: SearchParams) {
  const results = await TaskModel.find({ status });

  return results.map((task) => {
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

export default filterTaskByStatus;
