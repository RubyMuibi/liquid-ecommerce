"use client"
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    typeof window !== 'undefined' && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item, size) => {
    const isItemInCart = cartItems.find((cartItem) => {
      return cartItem.id === item.id && cartItem.size === size;
    });

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) => {
         return cartItem.id === item.id && cartItem.size === size ? { ...cartItem, quantity: cartItem.quantity + 1 }: cartItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (item, size) => {
    const isItemInCart = cartItems.find((cartItem) => {
      return cartItem.id === item.id && cartItem.size === size;
    });

    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => {
          return cartItem.id !== item.id || cartItem.size !== size;
        })
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id && cartItem.size === size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {

    return cartItems.reduce((total, item) => {
      return total + item.attributes.price * item.quantity;
    }, 0);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItems = localStorage.getItem("cartItems");

      if (cartItems) {
        setCartItems(JSON.parse(localStorage.getItem("cartItems")));
      }
    }
  }, []);

  return (
    <CartContext.Provider
    value = { {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} } 
    >
        {children}
    </CartContext.Provider>
  )
};


