"use client";
import shopStyles from "./shop.module.css";
import { useState, useEffect } from "react";

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
              <div key={x.id} className={shopStyles.product}>{x.attributes.name}</div>
            </>
          );
        })}

      </section>
    </>
  );
}
