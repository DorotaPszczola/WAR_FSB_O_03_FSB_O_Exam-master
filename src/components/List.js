import PropTypes from "prop-types";
import React from "react";

const List = ({ items, toggle, remove }) => {

    return (
        <ul>
            {items.map((item) => {
                const styleDone = { textDecoration: item.done ? "line-through" : "none" }
                console.log("item.title", item)
                return (

                    <li key={item.title} >
                        <span style={styleDone} onClick={() => toggle(item.done)}>{item.title}</span>
                        <button name={item.title} onClick={() => remove(item)} >Usuń</button>
                    </li>
                )
            })
            }
        </ul >
    )
}

List.propTypes = {
    items: PropTypes.array,
    toggle: PropTypes.func, // zad 4
    remove: PropTypes.func, // zad 5
    asyncRemove: PropTypes.func //zad7
}

export default List;

