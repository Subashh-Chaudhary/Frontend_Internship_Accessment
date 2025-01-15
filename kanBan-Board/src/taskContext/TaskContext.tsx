import { createContext, ReactNode, useContext } from "react";
import { Tasks, Columns, Task } from "./types";
import { tasks, columns, columnOrder } from "./initialData";

// Define the shape of the context
interface TaskContextType {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
  addTodo: (todo: Task) => void;
  updateTodo: (id: string, todo: Partial<Task>) => void;
  deleteTodo: (id: string) => void;
}

// Default value for the context
const defaultContext: TaskContextType = {
  tasks,
  columns,
  columnOrder,
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
};

// Create the context with the default value
const TaskContext = createContext<TaskContextType>(defaultContext);

// Custom hook to use the Todo context
export const useTodo = (): TaskContextType => {
  return useContext(TaskContext);
};

// Context provider component
const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { tasks, columns, columnOrder } = defaultContext;

  const addTodo = (todo: Task) => {
    console.log("Add todo", todo);
  };

  const updateTodo = (id: number, todo: Partial<Task>) => {
    console.log("Update todo", id, todo);
  };

  const deleteTodo = (id: number) => {
    console.log("Delete todo", id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        columns,
        columnOrder,
        addTodo: (todo: Task) => {
          console.log("Add todo", todo);
        },
        updateTodo: (id: string, todo: Partial<Task>) => {
          // Updated `id` to string
          console.log("Update todo", id, todo);
        },
        deleteTodo: (id: string) => {
          // Updated `id` to string
          console.log("Delete todo", id);
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
