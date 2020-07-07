import { combineReducers } from 'redux'
import counter from './counter'
import todos from "./todos";

// Action , Action 생성함수  ,reduceer 를 작성한 코드를 모듈이라 한다.

const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;