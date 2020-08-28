import React, { useState } from 'react';
import './App.css';


function TodoItems ({ todo, index, completeTodoItem, removeTodoItem }) {
  return (
      <div className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
      >
        {todo.text}

        <div>
          <button style={{ cursor: 'pointer' }}
            onClick={() => completeTodoItem(index)}>
             Update
          </button>
          <button 
            style={{ cursor: 'pointer' }}
            onClick={() => removeTodoItem(index)}>
             Delete
          </button>
        </div>
      </div> 
  );
};
  

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
  };

  return (
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
      </form>
  );
}


function App() {
  const [todoItems, setTodoItems] = useState([
    { 
      text: "Learn More about React" ,
      isCompleted: false
    },
    { 
      text: "Html Tutorials from Beginners",
      isCompleted: false
    },
    { 
      text: "Css Tutorials for React",
      isCompleted: false
    },
    { 
      text: "Learn more about Sequelize",
      isCompleted: false
    },
]);

// Add todo item functions
const addTodo = text => {
  const newTodoItems = [...todoItems, { text }];
  setTodoItems(newTodoItems);
};

// Update todo item functions
const completeTodoItem = index => {
  const newTodoItems = [...todoItems];
  newTodoItems[index].isCompleted = true;
  setTodoItems(newTodoItems);
}

// Delete / Remove todo item functions
const removeTodoItem = index => {
  const newTodoItems = [...todoItems];
  newTodoItems.splice(index, 1);
  setTodoItems(newTodoItems);
}


  return (
    <div className="App">
      <div className="todo-list">
        {todoItems.map((todo, index) => (
          <TodoItems
            key={index}
            index={index}
            todo={todo}
            completeTodoItem={completeTodoItem}
            removeTodoItem={removeTodoItem}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
