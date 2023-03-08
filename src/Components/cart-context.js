import React, { useState } from "react";
//Provider
//Consumer

const CartContext = React.createContext();

const CartProvider = (props)=> {
    const [cartData, setCartData] = useState([]);
    
    const addCartData = (data)=> {
        setCartData([...cartData, data]);
    }
    
    const removeCartData = ()=> {

    }
    return (
        <CartContext.Provider value={{cartData, addCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider};

//over here , I hv created a context and provider
// dont defaoult export but name export

//CMS will provide API and API will provide data
// to get data, we need HTTP client & for that npm i axios (or fetch)