import { DEC_COUNT, INC_COUNT,ADD_TODO_REQ,ADD_TODO_SUCCESS,ADD_TODO_FAILURE,DELETE_TODO } from "./actionType";

const initialState ={
    count: 0,
    todos:[],
    loading: false,
    isErr: false
}

const reducer =(state=initialState,action)=>{
    // console.log(state);
    switch(action.type){
        case INC_COUNT:
            return {
                ...state,
                count:state.count+action.payload
            }
        case DEC_COUNT:
            return{
                ...state,
                count:state.count-action.payload
            }
            case ADD_TODO_REQ:
                return {
                  ...state,
                  loading: true
                };
          
              case ADD_TODO_SUCCESS:
                return {
                  ...state,
                  todos: [...state.todos, action.payload],
                  loading: false
                };
          
              case ADD_TODO_FAILURE:
                return {
                  ...state,
                  isErr: true,
                  loading: false
                };
          
              case DELETE_TODO:
                const newData = state.todos.filter((todo) => todo.id != action.payload);
                return {
                  ...state,
                  todos: newData
                };
        default:
            return state;
    }
}
export default reducer;