import React, {useState, useEffect} from 'react';
import ListTodoItems from "./ListTodoItems";
import CreateTodoListItems from "./CreateTodoListItems";


const MainTodo = () => {
    const [todoItemsRemaining, setTodoItemsRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizzas",
            completed: false,
        },
        {
            title: "Do your workout",
            completed: false,
        },
        {
            title: "Learn how to code",
            completed: false,
        } 
    ]);

    // we are tracking the amount of todo items that are remaining on page
    useEffect(() => {
        setTodoItemsRemaining(tasks.filter(task => !task.completed).length)
    })

    
    // create new todo item function
    const createNewItems = title => {
        const newTodoItems = [...tasks, {title, completed: false}];
        setTasks(newTodoItems);
    }; 

    // complete or update todo item function
    const completeTodoItem = index => {
        const newTodoItems = [...tasks];
        newTodoItems[index].completed = true;
        setTasks(newTodoItems);
    };

    // remove todo list item function
    const removeTodoItem = index => {
        const newTodoItems = [...tasks];
        newTodoItems.splice(index, 1);
        setTasks(newTodoItems);
    };



    return (
        <div className="todo-container">
            <div className="header"> Todo Items Remaining ({todoItemsRemaining}) </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <ListTodoItems
                        task={task}
                        index={index}
                        key={index}
                        completeTodoItem={completeTodoItem}
                        removeTodoItem={removeTodoItem}
                    />
                ))}
            </div>
            <div className="create-task">
                <CreateTodoListItems
                    createNewItems={createNewItems}
                />
            </div>
        </div>
    );
}

export default MainTodo;
