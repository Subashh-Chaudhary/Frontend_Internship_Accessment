// Define the interfaces
export interface Task {
  id: string;
  content: string;
}

export interface Tasks {
  [key: string]: Task;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface Columns {
  [key: string]: Column;
}
