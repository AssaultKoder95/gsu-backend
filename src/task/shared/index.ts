export type Task = {
  title: string;
  description: string;
  status: "todo" | "inprogress" | "complete" | "backlog" | "blocked";
};
