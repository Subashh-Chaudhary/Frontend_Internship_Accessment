import { useState } from "react"
import TrashIcon from "../icons/TrashIcon"
import { Id, Task } from "../types"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
    task: Task,
    deleteTask:(id:Id) => void
}

function TaskCart({task, deleteTask} : Props) {
    const [mouseIsOver, setMouseIsOver] = useState(false);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
      } = useSortable({
        id: task.id,
        data: {
          type: "Task",
          task,
        },
      });

      const style = {
          transition,
          transform: CSS.Transform.toString(transform),
        };


        if(isDragging) {
            return (
              <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className="relative bg-mainBackgroundColor p-2.5 h-[50px] min-h-[50px] items-center flex text-left rounded-md cursor-grab opacity-30 border-2 border-rose-500" />
            );
        }

  return (
    <div
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className="relative bg-mainBackgroundColor px-4 py-3 items-center flex text-left rounded-md hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab"
    onMouseEnter={() => {
        setMouseIsOver(true)
    }}
    onMouseLeave={() => {
        setMouseIsOver(false);
    }
    }>

        {task.content}
        {mouseIsOver && 
        <button
        className="stroke-white absolute right-3 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-1 rounded opacity-60 hover:opacity-100"
        onClick={() => {
            deleteTask(task.id);
        }}>
            <TrashIcon />
        </button>}
    </div>
  ) 
}

export default TaskCart