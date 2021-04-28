import React from 'react';

const CartContext = React.createContext({
    cart: null,
    addToCart: () => {},
    updateCart: () => {},
    removeFromCart: () => {},
});

export default CartContext;