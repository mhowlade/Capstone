import { useState, useEffect } from "react";

function Cart() {
  const [checkout, setCheckout] = useState(false);
  const [purchase, setPurchase] = useState()

  useEffect(() => {
    LoadProduct();
  }, []);

  let retrievedObject = sessionStorage.getItem('id');
  console.log(retrievedObject);

  function LoadProduct() {
    console.log("http://localhost:3000/api/products/" + retrievedObject);
    fetch("http://localhost:3000/api/products/" + retrievedObject)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }

  console.log('button data fetch', purchase)
  
  return (
    <>
      <h1>Cart Page</h1>
      <div style={{ display: checkout ? "block" : "none" }}>
        <form >
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
