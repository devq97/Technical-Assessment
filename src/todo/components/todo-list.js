import React from 'react';
import Task from './task';

function TodoList(props) {
  return (
    <div className="TodoList">
      {
        props.list.map((item) => {
          return (
            <Task
              setRef = {props.setRef}
              handleRemoveTask={props.handleRemoveTask}
              key={item.id}
              {...item}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList;
