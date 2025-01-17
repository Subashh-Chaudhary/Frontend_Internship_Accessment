// import React from "react";
// import { DragDropContext, DropResult } from "react-beautiful-dnd";
// import "./App.css";
// import TaskContainer from "./components/TaskContainer";
// import TaskProvider, { useTodo } from "./taskContext/TaskContext";

// const App: React.FC = () => {
//   const { columns, setColumns } = useTodo();

//   // Handle drag-and-drop
//   const onDragEnd = (result: DropResult) => {
//     const { destination, source, draggableId } = result;

//     // Exit if there's no destination
//     if (!destination) return;

//     // Exit if the item is dropped back in the same place
//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     // Get the source and destination columns
//     const startColumn = columns[source.droppableId];
//     const endColumn = columns[destination.droppableId];

//     // Moving items within the same column
//     if (startColumn === endColumn) {
//       const updatedTaskIds = Array.from(startColumn.taskIds);
//       updatedTaskIds.splice(source.index, 1); // Remove from original position
//       updatedTaskIds.splice(destination.index, 0, draggableId); // Insert at new position

//       const updatedColumn = {
//         ...startColumn,
//         taskIds: updatedTaskIds,
//       };

//       setColumns((prev) => ({
//         ...prev,
//         [source.droppableId]: updatedColumn,
//       }));
//     } else {
//       // Moving items across different columns
//       const startTaskIds = Array.from(startColumn.taskIds);
//       startTaskIds.splice(source.index, 1);

//       const endTaskIds = Array.from(endColumn.taskIds);
//       endTaskIds.splice(destination.index, 0, draggableId);

//       const updatedColumns = {
//         ...columns,
//         [source.droppableId]: { ...startColumn, taskIds: startTaskIds },
//         [destination.droppableId]: { ...endColumn, taskIds: endTaskIds },
//       };

//       setColumns(updatedColumns);
//     }
//   };

//   return (
//     <TaskProvider>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <TaskContainer />
//       </DragDropContext>
//     </TaskProvider>
//   );
// };

// export default App;



import KanbaBoard from "./components/KanbaBoard";

function App() {
  return (
    <KanbaBoard />
  )
};

export default App;
