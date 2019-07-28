import React, { createContext, useState } from 'react';
let Context = createContext();


let CartProvider = ({ children }) => {
    let [cart, changeCart] = useState({});
    return <Context.Provider value={{
        cart,
        changeCart
    }}>
        {children}
    </Context.Provider>
}


export { Context, CartProvider }