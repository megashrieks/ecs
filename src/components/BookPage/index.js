import React, { useContext } from 'react';
import { Context } from '../context/BookDetails';
import "./index.css";
import Stars from '../Stars';
export default ({ match: { params: { id } } }) => {
    let BookContext = useContext(Context);
    let { bookDetails } = BookContext;
    let title, authors, average_rating, ratings_count, price,language_code,isbn;
    for (let i = 0; i < bookDetails.length; ++i){
        if (bookDetails[i].bookID == id) {
            let b = bookDetails[i];
            title = b.title;
            authors = b.authors;
            average_rating = b.average_rating;
            ratings_count = b.ratings_count;
            price = b.price;
            language_code = b.language_code;
            isbn = b.isbn;
            break;
        }
    }
    if(!title) return "no book found with that id"
    return <div className="book-page">
        <div className = "cover">
            <div className="book-image"><div className="centered">{title[0]}</div></div>
        </div>
        <div className="p-book-details">
            <div className="p-book-title">{title}</div>
            <div className="p-book-authors">By {authors}</div>
            <div className="stars">
                <Stars value={average_rating} />
                rated by {ratings_count} people
            </div>
            <div className="p-book-language">language :  {language_code}</div>
            <div className="p-book-isbn">ISBN :  {isbn}</div>
            <div className="p-book-price">Price : {price} <i className="fa fa-rupee-sign" /></div>
            {/*TODO*/}
            <button className = "add-to-cart">Add to Cart <i className = "fa fa-cart-plus"/></button>
        </div>
        </div>
}