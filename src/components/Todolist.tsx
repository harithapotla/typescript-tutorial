import React from 'react';
import { Todo } from '../model';
import Singletodo from './Singletodo';
import './styles.css';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist:React.FC<Props> = ({todos,setTodos})=>{
    return(
        <div className='todos'>
            {todos.map((todo)=>(
                <Singletodo todo={todo} key={todo.id}todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default Todolist