// 1. Action type 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경함
const INSERT = "todos/INSERT"; // 새로운 todo 를 등록함
const TOGGLE = "todos/TOGGLE"; // todo 를 체크/체크해제 함
const REMOVE = "todos/REMOVE"; // todo 를 제거함

//2. Action 생성함수 만들기.
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input
});

let id = 3;
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  tpye: REMOVE,
  id
});

//3. reducer
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: "redux tutorial",
      done: true,
    },
    {
      id: 2,
      text: "redux tutorial2",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT : 
      return {
          ...state,
          todos : state.todos.concat(action.todo)
      }
    case TOGGLE : 
      return {
          ...state,
          todos : state.todos.map(todo => 
            todo.id === action.todo.id ? {...todo, done : !todo.done} : todo
            )
      };
    case REMOVE : 
      return {
          ...state,
          todos : state.todos.filter(todo => todo.id !== action.id)
      }
    
    default:
      return state;
  }
}

export default todos;
