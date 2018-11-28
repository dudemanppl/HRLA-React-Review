import React from 'react';

let Task = (props) => (
    <ul>
        <li>{props.text}</li>
        <button onClick={() => {props.handleDelete()}}>Delete</button>
        <button onClick={() => {props.handleEdit()}}>Edit</button>
    </ul>
)

export default Task;