import { Dispatch } from "redux";
import { Action } from "../Types";
import axios from 'axios';


const action = (act: string, data: any | null): Action => ({ type: act, payload: data});

export const GET_API_PRODUCTS = "GET_API_PRODUCTS";
export const fetchApiProducts= (token: string) =>{

    return (dispatch: Dispatch) => {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        axios.get('https://api.enterprise.apigee.com/v1/organizations/eklft15-eval/apiproducts?expand=true', {headers: headers})
        .then(response => {
            dispatch(action(GET_API_PRODUCTS, response.data.apiProduct))
        })
        .catch(error => {
            console.log(error)
            dispatch(action(GET_API_PRODUCTS, {apiProduct:[]}));
        });
    }
};

export const GET_API_PRODUCT = "GET_API_PRODUCT";
export const fetchApiProduct= (apiProduct: string, token: string) =>{
    return (dispatch: Dispatch) => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        axios.get('https://api.enterprise.apigee.com/v1/organizations/eklft15-eval/apiproducts' + apiProduct, {headers: headers})
        .then(response => {
            dispatch(action(GET_API_PRODUCT, response.data))
        })
        .catch(error => {
            console.log(error)
            dispatch(action(GET_API_PRODUCT, {apiProduct:[]}));
        });
    }
};