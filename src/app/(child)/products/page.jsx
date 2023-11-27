"use client";
import AllProducts from "../../components/products/AllProducts";
import { fetcher } from "../../libs";
import useSWR from "swr";

export default function Product() {
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  // if(!data){
  //   console.log('test')
  // }
  // else {
  //   console.log('dataa',data.data[1])
  // }

  return (
    <>
      <div className="page-products">
        <h2 className="page-ttl">Page Products</h2>
        <AllProducts {...data}/>
      </div>
    </>
  );
}
