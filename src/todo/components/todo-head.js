import React from 'react';
import './todo-head.css';

function TodoHead(props) {
  return (
    <div className="TodoHead">
      <h2 className="TodoHeadTitle">Todo List Prueba Técnica</h2>
      <input
        ref={props.setRef}
        type="text"
        placeholder="Ingresa la tarea"
        className="task-input"
        name="task-input"
      />
      <span className="addTask" onClick={props.handleAddTask}>Añadir</span>
    </div>
  )
}

export default TodoHead;
