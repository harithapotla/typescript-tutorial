import React,{useState} from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Todolist from './components/Todolist';
import { Todo } from './model';

const  App: React.FC = ()=> {

  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }

  };
  console.log(todos);

  return (
    <div className="App">
      
      <span className='header'>Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}></Todolist>
    </div>
  );
}

export default App;
