import React from 'react';
import './todo-layout.css';

function TodoLayout(props) {
  return (
    <section className="TodoLayout">
      {props.children}
    </section>
  )
}

export default TodoLayout
