// "use client";
// import React, { useEffect, useState } from "react";
// import ProdustItem from "./ProdustItem";
// import { productsApi } from "@/app/api/productsApi";
// import Image from "next/image";
// import Link from "next/link";

// const AllProducts = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const listProduct = async () => {
//       try {
//         const result = await productsApi.get("products", {
//           params: {
//             per_page: 20,
//           },
//         });
//         setData(result.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     listProduct();
//   }, []);

//   return (
//     <section className="box-sec">
//       <div className="inner">
//         <h3 className="c-title01">All Products</h3>
//         <ul className="list-products">
//           {data.map((product) => {
//             return (
//               <li key={product.id} className="item">
//                 <ProdustItem {...product} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;


// Import các thư viện và component cần thiết
import React from "react";
import useSWR from "swr";
import ProdustItem from "./ProdustItem";
import { productsApi } from "@/app/api/productsApi";

const AllProducts = () => {
  // Sử dụng hook useSWR để fetch data
  const { data, error } = useSWR("products", async () => {
    const result = await productsApi.get("products", {
      params: {
        per_page: 20,
      },
    });

    return result.data;
  });

  if (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <section className="box-sec">
      <div className="inner">
        <h3 className="c-title01">All Products</h3>
        {/* Kiểm tra trạng thái fetching */}
        {(!data && !error) ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-products">
            {data.map((product) => (
              <li key={product.id} className="item">
                <ProdustItem {...product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
