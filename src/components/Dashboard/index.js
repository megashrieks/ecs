import React, { useContext } from 'react';
import { Switch,Route } from "react-router-dom";
import { Context } from '../context/BookDetails'
import UserControls from '../UserControls/'
import SearchOptions from '../SearchOptions/'
import SearchResult from '../SearchResult/'
import BookPage from '../BookPage'
import './index.css'

export default (props) => {
    let BookContext = useContext(Context);
    return <div className="container">
        <UserControls />
        <Switch>
            <Route path="/" exact component={props => <>
                <SearchOptions />
                <SearchResult books={BookContext.bookDetails} />
            </>}></Route>
            <Route path="/book/:id" component={BookPage}></Route>
        </Switch>
    </div>
}