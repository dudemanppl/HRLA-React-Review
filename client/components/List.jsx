import React from 'react';
import Task from './Task.jsx';

let List = (props) => (
    <div>
        {props.text.map((task, index) => <Task text={task} index={index} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>)}
    </div>
)

export default List;