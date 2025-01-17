import { useEffect, useMemo, useState } from "react";
import PlusIcons from "../icons/PlusIcons";
import { Id, Column, Task } from "../types";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCart from "./TaskCart";

function KanbaBoard() {
  // Default columns and tasks
  const defaultColumns: Column[] = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Done" },
  ];

  // Helper function to initialize localStorage with defaults
  const initializeLocalStorage = () => {
    const storedColumns = localStorage.getItem("columns");

    // Check if storedColumns is missing or an empty array
    if (!storedColumns || JSON.parse(storedColumns).length === 0) {
      localStorage.setItem("columns", JSON.stringify(defaultColumns));
    }

    
  };

  // Call this function before initializing state
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  // Initialize state from local storage or fallback to an empty array
  const [columns, setColumns] = useState<Column[]>(() => {
    const storedColumns = localStorage.getItem("columns");
    return storedColumns ? JSON.parse(storedColumns) : defaultColumns;
  });

  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isAdding, setIsAdding] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeTaskInput, setActiveTaskInput] = useState<Id | null>(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const handleAddColumn = () => {
    setIsAdding(true); // Show the input field
  };

  const handleSaveColumn = () => {
    if (newColumnTitle.trim() === "") return; // Prevent empty column titles
    const columnToAdd: Column = {
      id: generateId(),
      title: newColumnTitle,
    };

    setColumns([...columns, columnToAdd]);
    setNewColumnTitle(""); // Clear input
    setIsAdding(false); // Hide the input field
  };

  const handleCancel = () => {
    setNewColumnTitle(""); // Clear input
    setIsAdding(false); // Hide the input field
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveColumn(); // Save on Enter
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((column) => column.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  };

  const createTask = (columnId: Id) => {
    if (newTaskContent.trim() === "") return; // Prevent empty task content
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: newTaskContent,
    };
    setTasks([...tasks, newTask]);
    setNewTaskContent(""); // Clear input
    setActiveTaskInput(null); // Hide input field
  };

  const handleAddTaskClick = (columnId: Id) => {
    setActiveTaskInput(columnId); // Show input field for the clicked column
    setNewTaskContent(""); // Reset task input
  };

  const handleKeyPresss = (
    e: React.KeyboardEvent<HTMLInputElement>,
    columnId: Id
  ) => {
    if (e.key === "Enter") {
      createTask(columnId); // Create task on Enter key press
    }
  };

  const deleteTask = (id: Id) => {
    const fiteredTask = tasks.filter((task) => task.id !== id);
    setTasks(fiteredTask);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverColumn = over.data.current?.type === "Column";
    if (isActiveTask && isOverColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  // Save columns and tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [columns, tasks]);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="w-full m-auto flex gap-4 flex-wrap justify-center items-center">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => (
                <ColumnContainer
                  key={column.id}
                  column={column}
                  deleteColumn={deleteColumn}
                  input={activeTaskInput}
                  newTaskContent={newTaskContent}
                  setNewTaskContent={setNewTaskContent}
                  setActiveTaskInput={setActiveTaskInput}
                  handleKeyPresss={handleKeyPresss}
                  handleAddTaskClick={handleAddTaskClick}
                  createTask={createTask}
                  tasks={tasks.filter((task) => task.columnId === column.id)}
                  deleteTask={deleteTask}
                />
              ))}
            </SortableContext>
          </div>
          {isAdding && (
            <div className="new-column-input">
              <input
                type="text"
                value={newColumnTitle}
                onChange={(e) => setNewColumnTitle(e.target.value)}
                onKeyPress={handleKeyPress} // Listen for Enter key
                placeholder="Enter column title"
                className="input-field"
              />
              <button onClick={handleSaveColumn} className="save-button">
                Save
              </button>
              <button onClick={handleCancel} className="cancel-button">
                Cancel
              </button>
            </div>
          )}
          {!isAdding && (
            <button
              onClick={() => {
                handleAddColumn();
              }}
              className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-1 flex items-center gap-2"
            >
              <PlusIcons />
              Add Column
            </button>
          )}
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                input={activeTaskInput}
                newTaskContent={newTaskContent}
                setNewTaskContent={setNewTaskContent}
                setActiveTaskInput={setActiveTaskInput}
                handleKeyPresss={handleKeyPresss}
                handleAddTaskClick={handleAddTaskClick}
                createTask={createTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
                deleteTask={deleteTask}
              />
            )}
            {activeTask && (
              <TaskCart task={activeTask} deleteTask={deleteTask} />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

export default KanbaBoard;
