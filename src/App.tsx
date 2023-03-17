import React,{useState} from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { Todo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from './components/Todolist';

const  App: React.FC = ()=> {

  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const [completedTodos,setCompletedTodos]=useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  }
  
  const onDragEnd = (result:DropResult)=>{
    const { source, destination } = result;

    if(!destination) return

    
      if(destination.droppableId === source.droppableId && destination.index === source.index)
      return

      let add, 
          active  = todos,
          complete = completedTodos;


          if(source.droppableId === 'TodosList'){
            add = active[source.index];
            active.splice(source.index, 1);
          }
          else {
            add = complete[source.index];
            complete.splice(source.index, 1);
          }

          if(destination.droppableId === 'TodosList'){
            active.splice(destination.index,0,add);
          } 
          else {
            complete.splice(destination.index, 0, add);
          }
          setCompletedTodos(complete)
  };
  console.log(todos)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      
      <span className='header'>Taskify</span>
      <Inputfield 
      todo={todo} 
      setTodo={setTodo} 
      handleAdd={handleAdd}
      />
      <TodoList
      todos={todos} 
      setTodos={setTodos}
      completedTodos={completedTodos}
      setCompletedTodos={setCompletedTodos}
      />      
    </div>
    </DragDropContext>
  );
}

export default App;
