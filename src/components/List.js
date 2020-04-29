import PropTypes from "prop-types";
import React from "react";
import { remove, asyncRemove } from "../redux/actions";

const List = ({ todos, toggle, remove, asyncRemove }) => {
    const handleRemove = (e) => {
        e.preventDefault();
        remove(e.target.name)
    }

    // // const handleToggle = (e) => {
    // //     toggle(e.target.id)
    // // }
    const handleAsyncRemove = e => {
        e.preventDefault();
        asyncRemove(e.target.name)
    }

    return (
        <ul>
            {todos.map((item) => {
                const styleDone = { textDecoration: item.done && "line-through" }
                return (

                    <li key={item.title} >
                        <span name={item.title}
                            id={item.title}  style={styleDone}
                            onClick={() => toggle(item)}>  {item.title}
                        </span>

                        <button name={item.title}
                            onClick={handleRemove}>Usuń
                        </button>

                        <button name={item.title}
                            onClick={handleAsyncRemove}>Usuń po 2 sec
                        </button>
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

