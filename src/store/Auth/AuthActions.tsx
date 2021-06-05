import { Dispatch } from "redux";
import { Action } from "../Types";
import axios from 'axios';


export const action = (act: string, data: any | null): Action => ({ type: act, payload: data});

export const GET_AUTH_TOKEN = "GET_AUTH_TOKEN";
export const getAuthToken= (username: string, password: string) =>{
    return (dispatch: Dispatch) => {
        const headers = {
            'Content-Type':'application/x-www-form-urlencoded;charset=utf-8',
            'Accept':'application/json;charset=utf-8',
            'Authorization':'Basic ZWRnZWNsaTplZGdlY2xpc2VjcmV0'
        };
        const data = 'grant_type=password&username=' + username + '&password=' + password;
        axios.post('https://login.apigee.com/oauth/token', data, {headers: headers})
        .then(response => {
            dispatch(action(GET_AUTH_TOKEN, response.data.access_token));
        })
        .catch(error => {
            console.log(error)
            dispatch(action(GET_AUTH_TOKEN, 'UnAuthorized'));
        });
    }
};