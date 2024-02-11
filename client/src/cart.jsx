import "./styles/cart.css";
import { useState, useEffect } from "react";

function Cart() {
  const [checkout, setCheckout] = useState(false);
  let cartItems = []
  let existing = sessionStorage.getItem("cart");
  if (existing != null)
  {
    cartItems = JSON.parse(existing)
  }
  console.log('cart items', cartItems)
  
  return (
    <>
      <div className="cart-header">
       <h1>Cart Page</h1>
      </div>
      <div className="cart-products">
        <ul>
          {cartItems?.map((el, index) => (
            <>
            <div>
              <li>{el.name}</li>
              <li>{el.price}</li>
              <li><img src={el.images} /></li>
              <li><button className="remove-button">Remove</button></li>
            </div>
            </>
          ))}
        </ul>
      </div>
      <div className="checkout-header" style={{ display: checkout ? "block" : "none" }}>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            e-mail:
            <input type="text" name="name" />
          </label>
          <label>
            address:
            <input type="text" name="name" />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="checkout-header">
        <button onClick={() => setCheckout(!checkout)} style={{display: checkout ? "none" : "block"}}>Checkout </button>
      </div>
    </>
  );
}

export default Cart;
