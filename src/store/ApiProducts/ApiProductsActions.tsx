import { Dispatch } from "redux";
import apiProductsService from "../../services/ApiProductsService";
import { Action } from "../Types";


const action = (act: string, data: any | null): Action => ({ type: act, payload: data});

export const GET_API_PRODUCTS = "GET_API_PRODUCTS";
export const fetchApiProducts= () =>{

    return (dispatch: Dispatch) => {
        apiProductsService.getApiProductsWithDetails()
            .then(apiProducts => {
                dispatch(action(GET_API_PRODUCTS, apiProducts));
            })
            .catch(err => {
                console.log(err)
                dispatch(action(GET_API_PRODUCTS, {apiProduct:[]}));
            });
    }
};

export const GET_API_PRODUCT = "GET_API_PRODUCT";
export const fetchApiProduct= (apiProduct: string) =>{
    return (dispatch: Dispatch) => {
        apiProductsService.getApiProduct(apiProduct)
            .then(apiProduct => {
                console.log(apiProduct);
                return dispatch(action(GET_API_PRODUCT, apiProduct));
            })
            .catch(err => {
                console.log(err)
                return dispatch(action(GET_API_PRODUCT, {apiProduct:[]}));
            });
    }
};