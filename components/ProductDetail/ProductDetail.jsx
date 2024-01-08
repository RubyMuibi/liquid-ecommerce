"use client";

import productDetailStyles from "./ProductDetail.module.css";
import Cart from "../Cart/Cart";
import { CartModalContext } from "@/context/CartModalContext"; 
import { CartContext } from "@/context/CartContext";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";

export default function ProductDetail({ currentProduct }) {
  const [showdropDown, setShowDropdown] = useState(false);
  const [size, setSize] = useState("S");

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
  useContext(CartContext);
  const { cartModal, handleCartModal, handleShowCartModal } = useContext(CartModalContext);

  const sizeOptions = ["S", "M", "L", "XL"];

  const handleDropDown = () => {
    setShowDropdown(!showdropDown);
  };

  const getSize = (event) => {
    setSize(event.target.textContent);
    setShowDropdown(false);
  };

  return (
    <>
     {cartModal && <Cart/> }
      {currentProduct.map((x) => {
        const imageURL = x.attributes.imageURL.image1;
        return (
          <>
            <main className={productDetailStyles.container}>
              <section className={productDetailStyles.imageContainer}>
                <Image
                  src={imageURL}
                  width={400}
                  height={500}
                  alt="Picture of a cloth from Liquid store"
                />
              </section>

              <section className={productDetailStyles.detail}>
                <button className={productDetailStyles.categoryBtn}>
                  {x.attributes.category}
                </button>

                <div className={productDetailStyles.description}>
                  <h1> {x.attributes.name} </h1>
                  <h2> {x.attributes.description} </h2>
                </div>

                <div className={productDetailStyles.optionContainer}>
                  {showdropDown &&
                    sizeOptions.map((x) => {
                      return (
                        <>
                          <div
                            className={productDetailStyles.sizeOptionContainer}
                          >
                            <p
                              className={productDetailStyles.sizeOption}
                              onClick={getSize}
                            >
                              {x}
                            </p>
                          </div>
                        </>
                      );
                    })}


                  <div
                    onClick={handleDropDown}
                    className={productDetailStyles.selectSize}
                  >
                    <h3> Select Size - {size} </h3>
                    <Icon
                      icon="icomoon-free:point-down"
                      color="white"
                      width="20"
                      height="20"
                    />
                  </div>

                  <div className={productDetailStyles.addToCart}>
                    <h3 onClick={() => { addToCart(x, size); handleShowCartModal() }}> Add to Cart - ${x.attributes.price} </h3>
                    <Icon
                      icon="icons8:buy"
                      color="black"
                      width="28"
                      height="28"
                    />
                  </div>
                </div>
              </section>
            </main>
          </>
        );
      })}
    </>
  );
}
