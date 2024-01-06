"use client";

import productDetailStyles from "./ProductDetail.module.css";

import { useState } from "react";

import { Icon } from "@iconify/react";

export default function ProductDetail() {
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
      <main className={productDetailStyles.container}>
        <section className={productDetailStyles.image}></section>

        <section className={productDetailStyles.detail}>
          <button className={productDetailStyles.categoryBtn}> Shirt </button>
          
          <div className={productDetailStyles.description}>
            <h1> Corduroy TR Seltzer Co Hat - Green </h1>
            <h2>
              Might just be the best t-shirt youll ever buy. Perfect weight at
              6.5oz and a slight slubby feel gives it a texture we love.
              Prewashed with a slight boxy cut. Custom artwork by our art OG
              Jonny Mowat. • Unisex • Made In U.S.A. • 6.5 oz/yd2 • 18/1 open
              end cotton
            </h2>
          </div>

          <div className={productDetailStyles.optionContainer}>
            {showdropDown &&
              sizeOptions.map((x) => {
                return (
                  <>
                    <div className={productDetailStyles.sizeOptionContainer}>
                      <p className={productDetailStyles.sizeOption} onClick={getSize}>
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
              <h3> Add to Cart - $12.29 </h3>
              <Icon icon="icons8:buy" color="black" width="28" height="28" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
