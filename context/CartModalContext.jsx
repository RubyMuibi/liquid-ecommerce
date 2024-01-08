"use client"

import { useState, createContext } from "react";

export const CartModalContext = createContext();

export function CartModalContextProvider ({children} ) {
    const [ cartModal, setCartModal ] = useState(false)
    const handleCartModal = () => { setCartModal(!cartModal) };
    const handleShowCartModal = () => { setCartModal(true) };

  return (
    <>
      <CartModalContext.Provider value={{cartModal, handleCartModal, handleShowCartModal}}>
      {children}
      </CartModalContext.Provider>
    </>
  );
};
