import React, { useState, createContext, ReactNode, useContext } from "react";
import { Tasks, Columns, Task } from "./types";
import { tasks, columns as initialColumns, columnOrder } from "./initialData";

// Define the shape of the context
interface TaskContextType {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
  setColumns: React.Dispatch<React.SetStateAction<Columns>>;
  addTask: (task: Task) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

// Default value for the context
const defaultContext: TaskContextType = {
  tasks,
  columns: initialColumns, // Ensure columns have the correct type
  columnOrder,
  setColumns: () => {}, // Placeholder function for now
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
};

// Create the context with the default value
const TaskContext = createContext<TaskContextType>(defaultContext);

// Custom hook to use the Task context
export const useTodo = (): TaskContextType => {
  return useContext(TaskContext);
};

// Context provider component
const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Explicitly type `columns` and initialize with `initialColumns`
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [state] = useState({
    tasks,
    columnOrder,
  });

  // Functions for adding, updating, and deleting tasks
  const addTask = (task: Task) => {
    console.log("Add task", task);
  };

  const updateTask = (id: string, task: Partial<Task>) => {
    console.log("Update task", id, task);
  };

  const deleteTask = (id: string) => {
    console.log("Delete task", id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        columns,
        columnOrder,
        setColumns,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
