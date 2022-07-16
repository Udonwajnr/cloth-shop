import { combineReducers } from "redux";
import { productReducer } from "./productReducers";


const allReducer = combineReducers({
    allProducts:productReducer,
})

export default allReducer