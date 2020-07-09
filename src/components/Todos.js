import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
        <input type="checkbox" 
              onClick={ () => onToggle(todo.id)}
              checked = {todo.done}
              readOnly={true}
              />
        <span> {todo} </span>
        <button>  Delete</button>
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
        onInsert(input);
        onChangeInput('');
    }

    const onChange = (e) => {
      onChangeInput(e.target.value);
    };

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">Enroll</button>
        </form>
        <div>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item.text}
              onToggle={onToggle}
            ></TodoItem>
          ))}
        </div>
      </div>
    );
};

export default Todos;