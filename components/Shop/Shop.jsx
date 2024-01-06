"use client";
import shopStyles from "./shop.module.css";

import { useState, useEffect } from "react";

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Shop() {
  const [products, setProducts] = useState([]);

  const [shirts, setShirts] = useState([]);

  const [pants, setPants] = useState([]);

  const [ featuredProduct, setFeaturedProduct] = useState([])

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

      setFeaturedProduct (filterProduct);
    };
    getFeaturedProduct();

  }, [products]);

  console.log("products", products);

  return (
    <>
      <section className={shopStyles.container}>

        {products.map((x) => {
          return (
            <>

              <Link href={`/product/${x.id}`}  key={x.id} className={shopStyles.product}> {x.attributes.name}</Link>

              
            </>
          );
        })}

          
      </section>
    </>
  );
}
