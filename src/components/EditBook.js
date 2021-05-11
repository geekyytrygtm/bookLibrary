import React, {useState} from 'react';
import { connect } from "react-redux"
import { editBook } from "../redux/books/bookActions"

function EditBook(props) {
    console.log(props)
    const [name, setName] = useState(props.location.state.name);
    const [description, setDescription] = useState(props.location.state.description);
    const [author, setAuthor] = useState(props.location.state.author);
    const [count, setCount] = useState(props.location.state.count);
    const [category, setCategory] = useState(props.location.state.category);
    return (
        <div className="editBook">
            <h2>Edit Books</h2>
            <h4>Update below values to Edit book</h4>    
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
                onClick = {() => props.edit({
                    id: props.match.params.id.split(":")[1],
                    name,
                    description,
                    author,
                    count,
                    category
                })}>Edit</button>
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
        edit: (book)=> dispatch(editBook(book))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditBook)