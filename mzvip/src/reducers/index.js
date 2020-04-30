import { combineReducers } from "redux";

import user from "./user";
import slide from "./slide";

let reducer = combineReducers({
    user,
    slide
})

export default reducer;