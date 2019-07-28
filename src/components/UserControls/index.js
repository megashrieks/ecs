import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import {Context} from '../context/CartDetails'
export default () => {
    let CartContext = useContext(Context);
    let items = Object.keys(CartContext.cart)
    return <div className="user-controls">
        <Link className = "user-avatar" to="/"><i className="fa fa-home"/></Link>
        <div style={{ width: "100%" }}></div>
        <Link to="/checkout" className="cart-menu"><i className="fa fa-shopping-cart"></i>
            {items.length ? <div className="cart-length">{items.length}</div> : null}
        </Link>
    </div>
}