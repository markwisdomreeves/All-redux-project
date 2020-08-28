import React from 'react';
import "./main-todo.css";


function ListTodoItems(props) {
    const { task, index, completeTodoItem, removeTodoItem } = props;
    return (
        <div className = "task"
            style={{ textDecoration: task.completed ? "line-through" : ""}}
        >
            {task.title}
            
            <button className="remove-item" onClick={() => removeTodoItem(index)}>
                X
            </button>
            <button className="complete-item" onClick={() => completeTodoItem(index)}>
               Complete
            </button>
            
        </div>
    );
}


export default ListTodoItems;
 