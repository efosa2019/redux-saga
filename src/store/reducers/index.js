import { combineReducers } from "redux";
import { dataReducer } from "./data";

const appReducer = combineReducers({
    data: dataReducer
});

export default appReducer;