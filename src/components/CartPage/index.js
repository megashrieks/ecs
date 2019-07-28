import React, { useContext } from 'react';
import { Context as Cart } from '../context/CartDetails'
import { Context as Book } from '../context/BookDetails'
import BookItem from '../BookItem'
export default props => {
    let CartContext = useContext(Cart);
    let BookContext = useContext(Book);

    let items = [];
    let cost = 0;
    for (let i = 0; i < BookContext.bookDetails.length; ++i){
        if (CartContext.cart[BookContext.bookDetails[i].bookID]){
            items.push(BookContext.bookDetails[i]);
            cost += BookContext.bookDetails[i].price;
        }
    }
    return <>
        {items.map(item => <BookItem data={item} />)}
            <div style={{ textAlign: "center", padding: "10px" }}>
            {!items.length && "Add some items to cart to display here"}
            {!!items.length && <button
                    className="add-to-cart"
                    onClick={() => CartContext.changeCart({})}>
                    Checkout {cost} <i className="fa fa-rupee-sign" />
                </button>}
        </div>
    </>
}   