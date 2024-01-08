"use client";
import shopStyles from "./shop.module.css";
import Cart from "../Cart/Cart";

import { CartContext } from "@/context/CartContext";
import { CartModalContext } from "@/context/CartModalContext";

import { useState, useEffect, useContext } from "react";

import Link from "next/link";
import Image from "next/image";


export default function Shop() {
  const [products, setProducts] = useState([]);

  const [shirts, setShirts] = useState([]);

  const [pants, setPants] = useState([]);

  const [featuredProduct, setFeaturedProduct] = useState([]);

  const { cartModal, handleCartModal } = useContext(CartModalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api");
      const responseData = await response.json();
      const productData = responseData.data;
      setProducts(productData);
    };
    fetchProducts();

    const getShirts = () => {
      const filterShirts = products.filter((x) => {
        return x.attributes.category.includes("shirt");
      });

      setShirts(filterShirts);
    };
    getShirts();

    const getPants = () => {
      const filterPants = products.filter((x) => {
        return x.attributes.category.includes("pant");
      });

      setPants(filterPants);
    };
    getPants();

    const getFeaturedProduct = () => {
      const filterProduct = products.filter((x) => {
        return x.attributes.isFeatured === true;
      });

      setFeaturedProduct(filterProduct);
    };
    getFeaturedProduct();
  }, [products]);


  return (
    <>
     {cartModal && <Cart/> }
      <section className={shopStyles.container}>
        {products.map((x) => {
          const imageURL = x.attributes.imageURL.image1;
          return (
            <>
              <Link
                href={`/product/${x.id}`}
                key={x.id}
                className={shopStyles.product}
              >

                  <div className={shopStyles.imageContainer}>
                    <Image
                      src={imageURL}
                      width={250}
                      height={300}
                      alt="Picture of a cloth from Liquid store"
                    />
                  </div>
                  <div className={shopStyles.info} >
                  <p> {x.attributes.name} </p>
                  <p> {x.attributes.price} </p>
                  </div>

              </Link>
            </>
          );
        })}
      </section>
    </>
  );
}
