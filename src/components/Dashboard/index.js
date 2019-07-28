import React,{useContext} from 'react';
import { Context } from '../context/BookDetails'
import UserControls from '../UserControls/'
import SearchOptions from '../SearchOptions/'
import SearchResult from '../SearchResult/'

import './index.css'

export default (props) => {
    let BookContext = useContext(Context);
    return <div className="container">
        <UserControls />
        <SearchOptions />
        <SearchResult books={BookContext.bookDetails}/>
    </div>
}