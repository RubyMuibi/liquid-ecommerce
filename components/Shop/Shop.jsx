"use client";
import shopStyles from "./shop.module.css";
import { useState, useEffect } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);

  const [shirts, setShirts] = useState(products);

  const [pants, setPants] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api");
      const responseData = await response.json();
      const productData = responseData.data;
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  console.log("products", products);

  const getShirts = () => {
    const filterShirts =  products.filter( (x) => {
      x.attributes.category.includes("shirt")
      setShirts(filterShirts)
    })
  }

  const getPants = () => {
    const filterPants =  products.filter( (x) => {
      x.attributes.category.includes("pant")
      setPants(filterPants)
    })
  }

  return (
    <>
      <section className={shopStyles.container}>
        {shirts.map((x) => {
          return (
            <>
              <div className={shopStyles.shirt}>
                {x.attributes.name}
              </div>
            </>
          );
        })}
      </section>

      <section></section>
    </>
  );
}
