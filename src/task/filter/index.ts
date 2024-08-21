import TaskModel from "../../models/task";
import { Task } from "../shared";

type SearchParams = {
    status: Task["status"];
}

async function filterTaskByStatus({ status }: SearchParams) {
    return TaskModel.find({ status });
}

export default filterTaskByStatus;
