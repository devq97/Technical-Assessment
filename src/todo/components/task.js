import React from 'react';
import './task.css';

function Task(props) {
  return (
    <li className="Task">
      {props.name}
      <span
        ref={props.setRef}
        className="closeTask"
        onClick={() => props.handleRemoveTask(props.id)}
      >&times;</span>
    </li>
  )
}

export default Task
