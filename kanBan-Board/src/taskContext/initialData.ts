import { Tasks, Columns } from "./types";

// Define the initial data
const tasks: Tasks = {
  "task-1": { id: "task-1", content: "Take out the garbage" },
  "task-2": { id: "task-2", content: "Watch my favourite show" },
  "task-3": { id: "task-3", content: "Charge my phone" },
  "task-4": { id: "task-4", content: "Cook dinner" },
};

const columns: Columns = {
  "column-1": {
    id: "column-1",
    title: "To do",
    taskIds: ["task-1", "task-2", "task-3", "task-4"],
  },
};

const columnOrder: string[] = ["column-1"];

export { tasks, columns, columnOrder };
