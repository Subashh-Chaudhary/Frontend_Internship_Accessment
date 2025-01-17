import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { Id, Column, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import PlusIcons from "../icons/PlusIcons";
import TaskCart from "./TaskCart";
import { useMemo } from "react";

interface Props {
  column: Column; 
  deleteColumn: (id: Id) => void; 
  input: Id | null; 
  newTaskContent: string;
  setNewTaskContent: (content: string) => void;
  setActiveTaskInput: (columnId: Id | null) => void; 
  handleKeyPresss: (
    e: React.KeyboardEvent<HTMLInputElement>,
    columnId: Id
  ) => void; 
  handleAddTaskClick: (columnId: Id) => void;
  createTask: (columnId: Id) => void; // Function to create a new task
  tasks: Task[]; // List of tasks in the column
  deleteTask: (id: Id) => void; // Function to delete a task
}

function ColumnContainer(props: Props) {
  const {
    column,
    deleteColumn,
    input,
    newTaskContent,
    setNewTaskContent,
    setActiveTaskInput,
    handleKeyPresss,
    handleAddTaskClick,
    createTask,
    tasks,
    deleteTask,
  } = props;

  const tasksIds = useMemo(() => {
    return tasks.map(task => task.id)
  }, [tasks])

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-columnBackgroundColor w-[300px] h-[400px] max-h-[500px] rounded-md flex flex-col opacity-50 border-2 border-rose-500"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-columnBackgroundColor w-[300px] h-[400px] max-h-[400px] rounded-md flex flex-col"
    >
      <div
        {...attributes}
        {...listeners}
        className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          {column.title}
        </div>

        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCart key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </SortableContext>
      </div>

      {input === column.id ? (
        <div className="task-input-container">
          <input
            type="text"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            onKeyPress={(e) => handleKeyPresss(e, column.id)}
            placeholder="Enter task title"
            className="task-input"
          />
          <button
            onClick={() => createTask(column.id)}
            className="save-task-button"
          >
            Save
          </button>
          <button
            onClick={() => setActiveTaskInput(null)}
            className="cancel-task-button"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
          onClick={() => {
            handleAddTaskClick(column.id);
          }}
        >
          <PlusIcons /> Add task
        </button>
      )}
    </div>
  );
}

export default ColumnContainer;
