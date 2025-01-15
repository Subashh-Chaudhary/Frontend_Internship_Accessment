import { useTodo } from "../taskContext/TaskContext";
import "../App.css";
import TaskItem from "./TaskItems";
function TaskContainer() {
  const { tasks, columns, columnOrder } = useTodo();

  return (
      <div className="w-full py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {columnOrder.map((columnId) => {
            const column = columns[columnId];
            const taskItems = column.taskIds.map((taskId) => tasks[taskId]);

            return (
              <div
                key={column.id}
                className="w-fit bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {column.title}
                </h2>
                {/* Render task items */}
                {taskItems.map((task) => (
                  <TaskItem key={task.id} task={task} column={column} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default TaskContainer;
