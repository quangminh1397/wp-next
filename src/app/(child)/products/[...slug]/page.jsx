"use client";
import React from "react";
import ProductDetails from "@/app/components/products/ProductDetails";
import ProductsRelated from "@/app/components/products/ProductsRelated";
import { fetcher } from "@/app/libs";
import useSWR from 'swr';


export default function ProductSingle({ params }) {
  const {
    data : product,
    error,
    isLoading,
  } = useSWR(`/api/products/${params.slug}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log('data', product)

  return (
    <>
      <div className="single-product">
        <h2 className="page-ttl">Page detail</h2>
        <ProductDetails {...product} />
      </div>
    </>
  );
}
