import React from 'react';
import "../App.css";

const TodoItems = ({ todo }) => {
    return (
        <div className="todo">
            {todo.text}
        </div>
    );
}

export default TodoItems;
