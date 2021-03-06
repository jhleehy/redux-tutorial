import React from 'react';
import Todos from '../components/Todos'
import { connect } from 'react-redux';
import { changeInput, insert  , toggle , remove} from "../modules/todos";

const TodoContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    ></Todos>
  );
};

//export default TodoContainer;
export default connect(
    ({todos}) => ({
        input : todos.input,
        todos : todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodoContainer)