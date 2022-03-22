
import './App.css';
import Counter from './Counter';
import { Todo } from './Redux/components/Todo';
import { TodoInput } from './Redux/components/TodoInput';

function App() {
  return (
    <div className="App">
      <Counter/>
      
      <Todo/>
    </div>
  );
}

export default App;
