import { combineReducers } from "redux";
import ApiProductsReducers from "./ApiProducts/ApiProductsReducers";
import CounterReducers from "./Counter/CounterReducers";
import { AppState } from "./Types";

export const rootReducer = combineReducers<AppState>({
    apiProducts: ApiProductsReducers,
    counter: CounterReducers
});