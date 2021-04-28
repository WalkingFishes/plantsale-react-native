import React from 'react';

const CartContext = React.createContext({
    cart: null,
    addToCart: () => {},
});

export default CartContext;