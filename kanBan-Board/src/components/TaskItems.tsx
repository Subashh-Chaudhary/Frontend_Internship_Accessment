import React from "react";
import {TaskItemProps} from "./types"

const TaskItem: React.FC<TaskItemProps> = ({ task, column }) => {
  return (
    <div className="w-fit sm:w-48 md:w-64 lg:w-80 xl:w-72 p-2">
      <div
        className="flex flex-col gap-1 bg-slate-50 rounded-lg shadow-md 
                   hover:shadow-lg transition-all duration-300 ease-in-out px-4 sm:px-6 py-3 sm:py-4 
                   transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <p className="text-black text-sm sm:text-base font-semibold break-words">
          {task.content}
        </p>
        <small className="text-slate-600 text-xs sm:text-sm">
          {column.title}
        </small>
      </div>
    </div>
  );
};

export default TaskItem;
