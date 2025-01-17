import { Droppable, Draggable } from "react-beautiful-dnd";
import { useTodo } from "../taskContext/TaskContext";
import "../App.css";
import TaskItem from "./TaskItems";

const TaskContainer = () => {
  const { tasks, columns, columnOrder } = useTodo();

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const taskItems = column.taskIds.map((taskId) => tasks[taskId]);
      
          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided, snapshot) => (
                <div
                  ref = {provided.innerRef}
                  {...provided.droppableProps}
                  className="column-container"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {column.title}
                  </h2>
                  {taskItems.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task-item-container"
                        >
                          <h1>{task.id}</h1>
                          <TaskItem task={task} column={column} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
};

export default TaskContainer;
