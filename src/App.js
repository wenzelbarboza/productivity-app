
import './App.css';
import TodoApp from './TodoApp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pomodoro from './components/pomodoro/Pomodoro';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoApp />} exact />
          <Route path='/pomodoro' element={<Pomodoro />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
