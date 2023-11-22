"use client";
import { productsApi } from "@/app/api/productsApi";
import AllProducts from "@/app/components/products/AllProducts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Product() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const listProduct = async () => {
  //     try {
  //       const result = await productsApi.get("products", {
  //         params: {
  //           per_page: 20,
  //         },
  //       });

  //       // Console log kết quả để kiểm tra
  //       console.log("API Result:", result.data);

  //       setData(result.data); // Lấy dữ liệu từ thuộc tính "data" của kết quả
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   listProduct();
  // }, []);

  return (
    <>
      <div className="page-products">
        <h2 className="page-ttl">Page Products</h2>
        <AllProducts />
      </div>
    </>
  );
}
