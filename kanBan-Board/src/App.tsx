import "./App.css";
import TaskProvider, { useTodo } from "./taskContext/TaskContext";
function App() {
  const { tasks, columns, columnOrder } = useTodo();

  return (
    <TaskProvider>
      {
        columnOrder.map(columnId => {
          const column = columns[columnId];
          const taskItems = column.taskIds.map(taskId => tasks[taskId]);
           return (
             <div key={column.id}>
               <h2>{column.title}</h2>
               {taskItems.map((task) => (
                 <div key={task.id}>
                   <p>{task.content}</p>
                 </div>
               ))}
             </div>
           );
        })
      }
    </TaskProvider>
  );
}

export default App;
