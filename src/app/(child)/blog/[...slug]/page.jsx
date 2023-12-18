// "use client";
// import React from "react";
// import { fetcher } from "@/app/libs";
// import useSWR from 'swr';
// import BlogDetail from "@/app/components/blog/BlogDetail";

// export default function ProductSingle({ params }) {
//   const {
//     data:post,
//     error,
//     isLoading,
//   } = useSWR(`/api/post/${params.slug}`, fetcher);
//   if (error) return <div className="inner">Failed to load</div>;
//   if (isLoading) return <div className="inner">Loading...</div>;
// console.log('post', post)
//   return (
//     <>
//       <div className="single-product">
//         <h2 className="page-ttl">Page detail</h2>
//         {/* <BlogDetail {...post} /> */}
//       </div>
//     </>
//   );
// }

import React from "react";
import BlogDetail from "@/app/components/blog/BlogDetail";
export default async function ProductSingle({ params }) {
  console.log(params)
  const res = await fetch(`${process.env.PATH_URL}/wp-json/wp/v2/posts?slug=${params.slug}`);
  const post = await res.json();
  console.log("post", post);
  return (
    <>
      <div className="single-product">
        <h2 className="page-ttl">Page detail</h2>
        <BlogDetail {...post} />
      </div>
    </>
  );
}
