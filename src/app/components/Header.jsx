"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { usePathname } from "next/navigation";

export default function Header() {
  const numberCart = useSelector((state) => state._todoProduct.numberCart);
  // const router = usePathname();
  // const [isProductPage, setIsProductPage] = useState(false);
  return (
    <>
      <header>
        <div className="inner">
          <nav className="primary-nav light">
            <ul>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link href="/">
              <Image
                src={"/assets/images/common/logo.png"}
                alt="I love lamp"
                width={354}
                height={32}
                priority
              />
            </Link>
          </div>
          <div className="shop-cart">
            <Link href="/cart">
              Cart: <span>{numberCart}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
