import React, { useContext,useState } from 'react';
import { Switch,Route } from "react-router-dom";
import { Context } from '../context/BookDetails'
import UserControls from '../UserControls/'
import SearchOptions from '../SearchOptions/'
import SearchResult from '../SearchResult/'
import BookPage from '../BookPage'
import './index.css'
export default (props) => {
    let BookContext = useContext(Context);
    let books = BookContext.bookDetails;
    let [term, changeTerm] = useState("");
    let filtered = [], result = [];
    for (let i = 0; i < books.length; ++i){
        if ((books[i].title + "").search(new RegExp(term, "i")) != -1) filtered.push(books[i]);
    }
    result = filtered;
    return <div className="container">
        <UserControls />
        <Switch>
            <Route path="/" exact component={props => <>
                <SearchOptions search={changeTerm} value={term}/>
                <SearchResult books={result}/>
            </>}></Route>
            <Route path="/book/:id" component={BookPage}></Route>
        </Switch>
    </div>
}