import { Tasks, Columns } from "./types";

// Define the initial tasks
const tasks: Tasks = {
  "task-1": { id: "task-1", content: "Take out the garbage" },
  "task-2": { id: "task-2", content: "Watch my favorite show" },
  "task-3": { id: "task-3", content: "Charge my phone" },
  "task-4": { id: "task-4", content: "Cook dinner" },
};

// Define the initial columns
const columns: Columns = {
  "column-1": {
    id: "column-1",
    title: "To do",
    taskIds: ["task-1", "task-2"], // Only a subset of tasks
  },
  "column-2": {
    id: "column-2",
    title: "In Process",
    taskIds: ["task-3"], // Tasks that are in progress
  },
  "column-3": {
    id: "column-3",
    title: "Done",
    taskIds: ["task-4"], // Tasks that are completed
  },
};

// Define the column order
const columnOrder: string[] = ["column-1", "column-2", "column-3"];

export { tasks, columns, columnOrder };
