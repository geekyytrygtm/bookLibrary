import {combineReducers} from "redux";
import bookReducer from "./books/bookReducer";
import bookListReducer from "./books/bookListReducer"


const rootReducer = combineReducers({
    book: bookReducer,
    bookList: bookListReducer
})

export default rootReducer;