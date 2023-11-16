import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <section className="product-detail box-sec">
      <div className="inner">
        <div className="box-img">
          <Image
            src={"/assets/images/product/lamp1-trans.png"}
            alt="I love lamp"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="box-desc">
          <h3 className="desc-ttl">Little Grey</h3>
          <div className="desc-cont">
            <p className="price">$475</p>
            <div className="sec">
              <p>
                Abstract, sculptural, refined and edgy with a modern twist. Its
                symmetrical, spoked structure generates a clever geometric
                presence, which works well in a contemporary environment.
              </p>
            </div>
            <div className="cart-quantity">
              <p className="hide-content">Product quantity.</p>
              <p className="hide-content">
                Change the quantity by using the buttons, or alter the input
                directly.
              </p>
              <button
                type="button"
                //   className="decrement number-button"
                //   onClick={() => {
                //     cart_decrement(item.id, item.quantity);
                //   }}
              >
                <span className="hide-content">Decrement quantity</span>
                <span aria-hidden="true">-</span>
              </button>
              <input
                className="quantity"
                name="number"
                type="number"
                min="1"
                max="10"
                size="2"
                //   defaultValue={item.quantity}
                //   onBlur={event => {
                //     cart_edit(item.id, event.target.value);
                //     console.log(event.target.value);
                //   }}
              />
              <button
                type="button"
                className="increment number-button"
                //   onClick={() => {
                //     cart_increment(item.id, item.quantity);
                //   }}
              >
                <span className="hide-content">Increment quantity</span>
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="btn-addtocard">
              <button
              // type="submit"
              // className="submit"
              // onClick={(e) => {
              //   addToCart(product.id);
              //   console.log(this.props.product.quantity);
              //   e.preventDefault();
              // }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
