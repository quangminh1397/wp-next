import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
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
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </header>
    </>
  );
}
