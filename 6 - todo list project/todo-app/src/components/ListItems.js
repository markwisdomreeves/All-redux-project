import React from 'react';
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.id}>
                <p>
                    {/* to in the list item editable field */}
                    <input
                      type="text"
                      id={item.id}
                      value={item.text}
                                // the setUpdateInput function receives a value and the id
                      onChange = {(event) => {props.setUpdateInput(event.target.value, item.id)}}
                    />
                <span>
                    <FontAwesomeIcon 
                    className="faicons" 
                    icon="trash"
                    onClick={ () => props.deleteSingleItem(item.id)} 
                />
                </span>
                </p>
            </div>
        )
    })
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}


export default ListItems;