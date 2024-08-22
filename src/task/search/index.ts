import TaskModel from "../../models/task";

async function searchTasks(queryTerm: string) {
  const results = await TaskModel.find({ $text: { $search: queryTerm } }).limit(
    5,
  );

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

export default searchTasks;
