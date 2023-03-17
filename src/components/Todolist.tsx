import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import Singletodo from './Singletodo';
import './styles.css';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos
    })=>{
    return(
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided,snapshot)=>(
                        <div 
                        className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                <span className='todos__heading'>
                    Active Tasks
                </span>
                {
                    todos.map((todo,index)=>(
                    <Singletodo 
                    index={index}
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos}
                    key={todo.id}
                    />        
                    ))}
                    {provided.placeholder}
                    </div>
                    )}
            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided,snapshot)=>(
                        <div
                         className={`todos  ${snapshot.isDraggingOver ? "dragcomplete" : "remove"
                          }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        > 
                        <span className='todos__heading'>
                        Completed Tasks
                        </span>
                        {
                         completedTodos.map((todo,index)=>(
                        <Singletodo 
                        index={index}
                        todo={todo} 
                        todos={completedTodos} 
                        setTodos={setCompletedTodos}
                        key={todo.id}
                        />            
                        ) )} 
                        {provided.placeholder}  
                        </div>
                        )}
            </Droppable>
        </div>
    );
};

export default TodoList