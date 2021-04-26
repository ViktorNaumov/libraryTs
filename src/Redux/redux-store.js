import { createStore, combineReducers, applyMiddleware } from "redux";
import reduser from "./reduser"
import thunkMiddleware from "redux-thunk"

let redusers = combineReducers({
    app: reduser
    
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;