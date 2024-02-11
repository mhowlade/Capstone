import { useState, useEffect } from "react";

function Cart() {
  const [checkout, setCheckout] = useState(false);
  const [purchase, setPurchase] = useState();
 
  
  useEffect(() => {
    LoadRecommendations()
    console.log('cart page useeffect', purchase)
  }, [])

    let cartItems = []
    let existing = sessionStorage.getItem("cart");
    if (existing != null)
    {
      cartItems = JSON.parse(existing)
    }
  

  console.log('cart items', cartItems)
  console.log('cart item id', cartItems[0]._id)

  function LoadRecommendations(){
    fetch(
      "http://localhost:3000/api/recommendations/" + cartItems[0]._id + "/4")
      .then((res) => res.json())
      .then((data) => setPurchase(data))
  };


  
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
        <h2>Based on your purchase you might also like:</h2>
        <ul>
          {purchase?.map((el,index) => (
            <>
            <img src={el.images}></img>
            <p>{el.name}</p>
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
