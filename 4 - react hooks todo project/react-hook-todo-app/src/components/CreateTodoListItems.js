import React, {useState} from 'react';


const CreateTodoListItems = (props) => {
    const { createNewItems } = props;
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        // we call the function that add item in the todo
        createNewItems(value);
        setValue("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new item"
                onChange={event => setValue(event.target.value)} 
            />
            <div className="btn-container">
                <button type="submit" className="btn-styled">Add Item</button>
            </div>
        </form>
    );
}

export default CreateTodoListItems;
