import React, { Component } from 'react';
import uuid from "react-uuid";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

library.add(faTrash);

class ParentListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentItem: {
                text: "",
                id: uuid(),
                // key: "",
                
            }
        }

        // binding the method
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItemToForm = this.addItemToForm.bind(this);
        this.deleteSingleItem = this.deleteSingleItem.bind(this);
        this.setUpdateInput = this.setUpdateInput.bind(this);
    }

    // handle form input changes function
    handleInputChange(event) {
        this.setState({
            currentItem: {
                text: event.target.value,
                id: uuid(),
                // key: Date.now()
                // id: Date.now()
            }
        })
    }

    // handle form submit data function
    addItemToForm(event) {
        event.preventDefault();
        // creating a new text item from our state object
        const createNewItems = this.state.currentItem;
        if(createNewItems.text !== "") {
            /* than, we store our old data object and our 
            new data object using a spread operator */
            const bothNewAndOldObjects = [...this.state.items, createNewItems];
            console.log(bothNewAndOldObjects);
            this.setState({
                // we are setting all our both new and old object to our item array
                items: bothNewAndOldObjects,
                currentItem: {
                    text: "",
                    id: uuid(),
                }    
            })
        }

    }

    // Delete single item function
    deleteSingleItem (id) {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    }

    // editable input field function to update the input value
    setUpdateInput (text, id) {
        const items = this.state.items;
        items.map(item => {
            if(item.id === id) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }

    render() {
        // const { currentItem, handleInputChange, addItemToForm } = this.state;
        return(
            <div className="App">
                <header>
                    <form id="to-do-form" onSubmit={this.addItemToForm}>
                        <input
                        type="text"
                        placeholder="Enter a Todo"
                        value={this.state.currentItem.text}
                        onChange={this.handleInputChange}
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                </header>
                <ListItems 
                 items = {this.state.items} 
                 deleteSingleItem = {this.deleteSingleItem}
                 setUpdateInput = {this.setUpdateInput}
                />
            </div>
        )
    }
}


export default ParentListItems;