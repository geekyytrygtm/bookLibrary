import axios from "axios"

export const addBookRequest = (book = {})=>{
    return {
        type: "ADD_BOOK_REQUEST",
        payload: book
    }
}

export const addBookSuccess = (books) => {
    return {
        type: "ADD_BOOK_SUCCESS",
        payload: books
    }
}

export const addBookError = (error) => {
    return {
        type: "ADD_BOOK_ERROR",
        payload: error
    }
}

export const editBookRequest = (book = {}) => {
    return {
        type: "UPDATE_BOOK_REQUEST",
        payload: book
    }
}

export const editBookSuccess = (books) => {
    return {
        type: "UPDATE_BOOK_SUCCESS",
        payload: books
    }
}

export const editBookError = (error) => {
    return {
        type: "UPDATE_BOOK_ERROR",
        payload: error
    }
}

export const getBookListRequest = () => {
    return {
        type: "FETCH_BOOK"
    }
}

export const getBookListSuccess = (books) => {
    return {
        type: "FETCH_BOOK_SUCCESS",
        payload: books
    }
}

export const getBookListError = (error) => {
    return {
        type: "FETCH_BOOK_ERROR",
        payload: error
    }
}

export const filterBooks = (search = "") => {
    return {
        type: "FILTER_BOOKLIST",
        payload: search
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        dispatch(getBookListRequest)
        axios.get("http://localhost:3001/books")
        .then(response => {
            dispatch(getBookListSuccess(response.data))
        })
        .catch(error => {
            dispatch(getBookListError(error.message))
        })
    }
}


export const addBook = (data) => {
    return (dispatch) => {
        dispatch(addBookRequest)
        axios.post("http://localhost:3001/books", data)
        .then(response => {
            dispatch(addBookSuccess(response.data))
        })
        .catch(error => {
            dispatch(addBookError(error.message))
        })
    }
}

export const editBook = (data) => {
    return (dispatch) => {
        dispatch(editBookRequest)
        axios.put("http://localhost:3001/books", data)
        .then(response => {
            dispatch(editBookSuccess(response.data))
        })
        .catch(error => {
            dispatch(editBookError(error.message))
        })
    }
}