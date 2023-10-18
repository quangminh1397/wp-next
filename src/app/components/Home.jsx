import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="wrap-content">
        <div className="inner">
          <ul className="list-product">
            <li className="items">
              <Link href="#">
                <Image
                  src={"/assets/images/product/lamp1-trans.png"}
                  alt="I love lamp"
                  width={500}
                  height={500}
                  priority
                />
              </Link>
            </li>
            <li className="items">
              <Link href="#">
                <Image
                  src={"/assets/images/product/lamp2-trans.png"}
                  alt="I love lamp"
                  width={500}
                  height={500}
                  priority
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
