import { DEC_COUNT, INC_COUNT } from "./actionType";

const initialState ={
    count: 0,
    todo:[]
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
        default:
            return state;
    }
}
export default reducer;