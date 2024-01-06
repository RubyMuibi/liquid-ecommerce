"use client";

import ProductDetail from "@/components/ProductDetail/ProductDetail";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Product() {
  const params = useParams();

  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    const urlParams = params.id;
    const fetchProductDetail = async () => {
      const response = await fetch(`/api`);
      const responseData = await response.json();
      const productData = responseData.data;

      const filterProduct = productData.filter((x) => {
        return urlParams == x.id;
      });

      setCurrentProduct(filterProduct);

    };
    fetchProductDetail();
  }, [params.id]);

  console.log(currentProduct);

  return (
    <>
      <ProductDetail currentProduct={currentProduct} />
    </>
  );
}
