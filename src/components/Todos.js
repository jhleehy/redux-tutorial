import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
        <input type="checkbox"></input>
        <span> Example Text </span>
        <button> Delete</button>
    </div>
  );
};


const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
      <div>
        <form onSubmit={onsubmit}>
          <input />
          <button type="submit">Enroll</button>
        </form>
        <div>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </div>
      </div>
    );
};

export default Todos;