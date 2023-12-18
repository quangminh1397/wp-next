import Link from "next/link";
import React from "react";

export default async function Blog() {
  const res = await fetch(`${process.env.PATH_URL}/wp-json/wp/v2/posts`);
  const posts = await res.json();
  return (
    <>
      <div className="page-blog">
        <h2 className="page-ttl">Page Blog</h2>
        <div className="inner">
          <ul className="list-post">
            {posts.map((post) => (
              <li key={post.id} className="item">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="post-ttl">{post.title.rendered}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


//use swr get data post


// "use client";
// import { fetcher } from "@/app/libs";
// import Link from "next/link";
// import React from "react";
// import useSWR from "swr";
// export default function Blog() {
//   const { data, error, isLoading } = useSWR(`/api/post`, fetcher);
//   if (error)
//     return (
//       <div className="inner">
//         <p className="c-txt01">Failed to load</p>
//       </div>
//     );
//   if (isLoading)
//     return (
//       <div className="inner">
//         <p className="c-txt01">Loading...</p>
//       </div>
//     );
//   if (!data) return null;
//   console.log("data", data);
//   return (
//     <>
//       <div className="page-about">
//         <h2 className="page-ttl">Page Blog</h2>
//         <div className="inner">
//           <ul className="list-post">
//             {data.map((post) => (
//               <li key={post.id} className="item">
//                 <Link href={`/blog/${post.slug}`}>
//                   <h3 className="post-ttl">{post.title.rendered}</h3>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
