"use client";

import productDetailStyles from "./ProductDetail.module.css";

import { useState } from "react";
import Image from "next/image";

import { Icon } from "@iconify/react";

export default function ProductDetail({ currentProduct }) {
  const [showdropDown, setShowDropdown] = useState(false);

  const [size, setSize] = useState("S");

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
      {currentProduct.map((x) => {
        const imageURL = x.attributes.imageURL.image1;
        return (
          <>
            <main className={productDetailStyles.container}>
              <section className={productDetailStyles.image}>
                <p> {imageURL} </p>
                <Image
                  src= {imageURL}
                  width={500}
                  height={500}
                  alt="Picture of the author"
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

                  <div className={productDetailStyles.selectSize}>
                    <h3 onClick={handleDropDown}> Select Size - {size} </h3>
                    <Icon
                      icon="icomoon-free:point-down"
                      color="white"
                      width="20"
                      height="20"
                    />
                  </div>

                  <div className={productDetailStyles.addToCart}>
                    <h3> Add to Cart - {x.attributes.price} </h3>
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
