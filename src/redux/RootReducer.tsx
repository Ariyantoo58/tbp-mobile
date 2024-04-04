import { combineReducers } from "redux";
import GlobalReducer from "./reducer/GlobalReducer";
import AuthReducer from "./reducer/AuthReducer";

const rootReducer = combineReducers({
    global: GlobalReducer,
    auth: AuthReducer
});

export default rootReducer;