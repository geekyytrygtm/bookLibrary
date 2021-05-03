const initialState = {
    loading: false,
    books: [],
    error:""
}

const bookListReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_BOOK": return {
            ...state,
            loading: true
        }
        case "FETCH_BOOK_SUCCESS": return {
            loading: false,
            books: action.payload,
            error: ""
        }
        case "FETCH_BOOK_ERROR": return {
            loading: false,
            books: [],
            error: action.payload
        }
        default: return state;
    }
}

export default bookListReducer