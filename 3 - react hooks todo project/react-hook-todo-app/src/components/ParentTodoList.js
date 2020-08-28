import React, {useState} from "react";
import "../App.css";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";

function ParentTodoList() {
    const [todoItems, setTodoItems] = useState([
        { text: "Learn More about React" },
        { text: "Html Tutorials from Beginners" },
        { text: "Css Tutorials for React" },
        { text: "Learn more about Sequelize" },
    ]);

    return(
        <div className="App">
            <div className="todo-list">
                {todoItems.map((todo, index) => (
                    <TodoItems
                       key={index}
                       index={index}
                       todo={todo}
                    />
                ))}
            </div>
        </div>
    );
}


export default ParentTodoList;
