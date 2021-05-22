import { applyMiddleware, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./ReducerConfig";
import { AppState } from "./Types";


const configureStore = (): Store<AppState> => {
    const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    return store;
};
export default configureStore;