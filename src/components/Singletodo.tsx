import React from "react";
import { Todo } from "../model";
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';


type Props = {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Singletodo = ({todo,todos,setTodos}:Props)=>{
    

    
    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo=>todo.id!==id)))
    }
    
    const handleDone = (id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo, isDone : !todo.isDone} :todo))
    }
    return(
        <form className="todos_single">
            <span className="todos_single--text">
                
                {todo.isDone ? (
                    <s className="todos_single--text">{todo.todo}</s>
                ) :(<span className="todos-single--text">{todo.todo}</span>)
                }</span>
            <div>
                <span className="icon">
                <AiFillEdit/>
                </span>
                <span className="icon"  onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
                </span>
                <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
                </span>
            </div>
        </form>
    )
}

export default Singletodo;