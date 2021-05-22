import { DECREMENT, INCREMENT, SET_DATA } from "./CounterActions";
import { Action, Counter } from "../Types";


const initialState: Counter = {
    count:0,
    data: ""
}
const ApiProductsReducers = (state: Counter = initialState,action: Action): Counter => {
    switch(action.type){
        case INCREMENT:

            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        case SET_DATA:
            return {
                ...state, data: action.payload,
            };
        default:
            return state;
    }
    
}

export default ApiProductsReducers;