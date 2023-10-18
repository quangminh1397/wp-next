import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="inner">
          <nav className="primary-nav light">
            <Link href="/products">Products</Link>
            <Link href="/styles">Styles</Link>
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
          <nav className="cart">Cart</nav>
        </div>
      </header>
    </>
  );
}
