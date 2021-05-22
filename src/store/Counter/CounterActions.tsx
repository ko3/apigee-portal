import { Action } from "../Types";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DATA = "SET_DATA";

export const increaseCounter = (): Action => {
        return {        
            type: INCREMENT,
            payload: null
        };
};

export const decreaseCounter = (): Action => {    
    return {       
        type: DECREMENT,
        payload: null  
    };
};

export const setData = (data: string): Action => {    
    return {       
        type: SET_DATA,
        payload: data  
    };
};