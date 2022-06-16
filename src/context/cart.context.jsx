import { createContext, useState, useEffect } from "react";

const AddCartItem = (cartItems, produceToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === produceToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id ===produceToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, { ...produceToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (produceToAdd) => {
        setCartItems(AddCartItem(cartItems, produceToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}