import { GET_API_PRODUCTS } from "./ApiProductsActions";
import { Action} from "../Types";
import { ApiProducts } from "../../services/ApiProductsType";


const initialState:ApiProducts = {
    apiProduct:[]
}
const ApiProductsReducers = (state:ApiProducts = initialState,action: Action): ApiProducts => {
    switch(action.type){
        case GET_API_PRODUCTS:

            return action.payload;
        default:
            return state;
    }
    
}

export default ApiProductsReducers;