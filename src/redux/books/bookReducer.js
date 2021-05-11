const initialState = {
    loading: false,
    book: {},
    error: ""
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_BOOK_REQUEST": return {
            ...state,
            loading: true
        }

        case "UPDATE_BOOK_REQUEST": return {
            ...state,
            loading: true
        }

        default: return state
    }
}

export default bookReducer