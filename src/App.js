import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  return (
      <div className="App">
        <TaskForm/>
        <hr/>  
        <TaskList/> 
      </div>
  );
}

export default App;
