import { AccessToken, Action } from "../Types";
import { GET_AUTH_TOKEN } from "./AuthActions";

const initialState: AccessToken = {
    accessToken:""
}
const AuthReducers = (state:AccessToken = initialState, action: Action): AccessToken => {
    switch(action.type){
        case GET_AUTH_TOKEN:
            return {
                ...state, accessToken: action.payload
            };
        default:
            return state;
    }
    
}

export default AuthReducers;