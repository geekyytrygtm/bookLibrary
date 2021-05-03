import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AddBook from "./components/AddBook";
import ListBooks from "./components/ListBooks";
import EditBook from "./components/EditBook"

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Add</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
      </header>
      
        <Switch>
          <Route exact path="/" component={AddBook} />
          <Route exact path="/list" component={ListBooks} />
          <Route exact path="/edit/:id" component={EditBook} />
        </Switch>  
    </div> 
  </BrowserRouter>
    
  );
}

export default App;
