import "./App.css";
import TaskContainer from "./components/TaskContainer";
import TaskProvider from "./taskContext/TaskContext";
function App() {

  return (
    <TaskProvider>
      <TaskContainer />
    </TaskProvider>
  );
}

export default App;
