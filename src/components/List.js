import PropTypes from "prop-types";
import React from "react";

const List = ({ items, toggle, remove }) => {
    const handleRemove = (e) => {
        e.preventDefault();
        remove(e.target.id)
    }

    // const handleToggle = (e) => {
    //     toggle(e.target.id)
    // }

    return (
        <ul>
            {items.map((item) => {
                const styleDone = { textDecoration: item.done && "line-through"}
                return (

                    <li key={item.title} >
                        <span id={item.title} style={styleDone} onClick={() => toggle(item)}>  {item.title}  </span>
                        <button id={item.title} name={item.title} onClick={handleRemove} >Usuń</button>
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

