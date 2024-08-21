import TaskModel from "../../models/task";

async function searchTasks(queryTerm: string) {
    const results = await TaskModel.find({ $text: { $search: queryTerm } }).limit(5);
    return results;
}

export default searchTasks;
