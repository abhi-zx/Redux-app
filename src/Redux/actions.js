import { DEC_COUNT, INC_COUNT,ADD_TODO_REQ,ADD_TODO_SUCCESS,ADD_TODO_FAILURE,DELETE_TODO } from "./actionType";

const incCount =(payload)=>({
    type:INC_COUNT,
    payload
})

const decCount=(payload)=>({
    type:DEC_COUNT,
    payload
})

export const addTodoReq = () => ({
    type: ADD_TODO_REQ
  });
  
  export const addTodoSuccess = (payload) => ({
    type: ADD_TODO_SUCCESS,
    payload
  });
  export const addTodoFailure = (message) => ({
    type: ADD_TODO_FAILURE,
    payload: message
  });
  
  export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
  });
export {incCount,decCount}