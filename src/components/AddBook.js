import React, {useState} from 'react';
import { connect } from "react-redux"
import { addBook } from "../redux/books/bookActions"

function AddBook(props) {
    const [name, setName] = useState(props.name||"");
    const [description, setDescription] = useState(props.description ||"");
    const [author, setAuthor] = useState(props.author||"");
    const [count, setCount] = useState(props.count||"");
    const [category, setCategory] = useState(props.category||"");
    return (
        <div className="addBook">
            <h2>Add Books</h2>
            <h4> Enter below values to add book to the library</h4>
            <section>
                <ul>
                    <li>
                        <label>Name</label>
                        <input 
                            type = "text" 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)} 
                            required />
                    </li>
                    <li>
                        <label>Description</label>
                        <input 
                            type = "text" 
                            value={description} 
                            onChange={(e)=>setDescription(e.target.value)}></input>
                    </li>
                    <li>
                        <label>Author</label>
                        <input 
                            type = "text"
                            value={author} 
                            onChange={(e)=>setAuthor(e.target.value)}
                            required></input>
                    </li>
                    <li>
                        <label>Count</label>
                        <input 
                            type = "number"
                            min="0"
                            value={count} 
                            onChange={(e)=>setCount(e.target.value)}
                            required></input>
                    </li>
                    <li>
                        <label>Category</label>
                        <input 
                            type = "text"
                            value={category} 
                            onChange={(e)=>setCategory(e.target.value)}
                            required></input>
                    </li>         
                </ul>
                <button 
                className="add"
                disabled= {!name && !author && !count && !category} 
                onClick = {() => props.addBook({
                    id: "ISBN_"+name.split(" ").join("_"),
                    name,
                    description,
                    author,
                    count,
                    category
                })
                }>Add</button>
            </section>      
        </div>
    )
}


const mapStateToProps =  (state) => {
    return {
        book: state.book
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: (book)=> dispatch(addBook(book))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(AddBook)
