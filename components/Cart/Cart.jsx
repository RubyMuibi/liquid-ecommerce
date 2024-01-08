"use client";

import cartStyles from "./cart.module.css";

import { CartContext } from "@/context/CartContext";
import { CartModalContext } from "@/context/CartModalContext";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { Icon } from "@iconify/react";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

    const { cartModal, handleCartModal } = useContext(CartModalContext);

  return (
    <>
      <main className={cartStyles.container}>
        <section className={cartStyles.sectionA}>
          <h1> My Cart</h1>
          <Icon icon="ph:x-fill" color="white" width="24" height="24" onClick={handleCartModal} />
        </section>

        {cartItems.map((x) => {
          const imageURL = x.attributes.imageURL.image1;

          const increaseQuantity = () => {
            addToCart(x, x.size);
          };
          const decreaseQuantity = () => {
            removeFromCart(x, x.size);
          };
          return (
            <>
              <section className={cartStyles.sectionB}>
                <div className={cartStyles.imageContainer}>
                  <Image
                    src={imageURL}
                    width={50}
                    height={50}
                    alt="Picture of a cloth"
                  />
                </div>

                <div>
                  <h1> {x.attributes.name} </h1>
                  <h2> Size - {x.size} </h2>
                </div>

                <div>
                  <h3> {x.attributes.price} </h3>
                  <div className={cartStyles.quantityContainer}>
                    <p onClick={decreaseQuantity}> - </p>
                    <h4> {x.quantity} </h4>
                    <p onClick={increaseQuantity}> + </p>
                  </div>
                </div>
              </section>
            </>
          );
        })}
        <section className={cartStyles.sectionC}>
          <div className={cartStyles.summary}>
            <h1> Taxes </h1>
            <h2> 0.00 USD </h2>
          </div>

          <div className={cartStyles.summary}>
            <h1> Shipping </h1>
            <h1> Calculated at Checkout </h1>
          </div>

          <div className={cartStyles.summary}>
            <h1> Total </h1>
            <h2> ${getCartTotal()} USD </h2>
          </div>

          <button className={cartStyles.checkoutBtn}>Proceed to Checkout</button>
        </section>
      </main>
    </>
  );
}
