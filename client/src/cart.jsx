import { useState, useEffect } from "react";

function Cart() {
  const [checkout, setCheckout] = useState(false);
  const [purchase, setPurchase] = useState()



  let cartItems = []
  let existing = sessionStorage.getItem("cart");
  if (existing != null)
  {
    cartItems = JSON.parse(existing)
  }

  console.log('cart items', cartItems)
  
  return (
    <>
      <h1>Cart Page</h1>
      <div>
        <ul>
          {cartItems?.map((el, index) => (
            <>
            <div>
              <li>{el.name}</li>
              <li>{el.price}</li>
            </div>
            </>
          ))}
        </ul>
      </div>
      <div style={{ display: checkout ? "block" : "none" }}>
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
      <button onClick={() => setCheckout(!checkout)}>Checkout </button>
    </>
  );
}

export default Cart;
