import React from "react";

const List = (props) => {
    return (
        <li className="listItem" onClick={() => {
            props.onChecked(props.id)
        }}>
            {props.text}
        </li>
    );
};

export default List;
