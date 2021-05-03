import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { fetchBooks } from "../redux/books/bookActions";
import {Link} from "react-router-dom"

function ListBooks({ data, fetchBooks }) {
    useEffect(() => {
        fetchBooks()
    }, [])
    return data.loading ? (<div className="booksList">
        <h2>Loading.....</h2>
    </div>): data.error ? (<div className="booksList">
    <h2>{data.error}</h2></div>): (<div className="booksList">
            <h2>List of Books</h2>
            <input type="text" placeholder="Search" className="searchBooks"/>
            {data.books.length>0 && (<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Count</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.books && data.books.map((book,i) => {
                            return (<tr key={"book"+i}>
                                <td>{book.name}</td>
                                <td>{book.description}</td>
                                <td>{book.author}</td>
                                <td>{book.count}</td>
                                <td>{book.category}</td>
                                <td><Link to={"/edit/:"+book.id}>Edit</Link></td>
                            </tr>)

                        })
                    }
                </tbody>
            </table>)
            }
        </div>)
}

const mapStateToProps = state => {
    return {
        data: state.bookList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks)
