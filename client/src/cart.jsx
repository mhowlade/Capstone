import "./styles/cart.css";
import { useState, useEffect } from "react";

function Cart() {
  let [checkout, setCheckout] = useState(false);
  let [priceTotal, setPriceTotal] = useState(0);
  let [recItems, setRecItems] = useState([]);
  let cartItems = []

  function LoadRecs(oid,n) {
    fetch("http://localhost:3000/api/recommendations/"+oid+"/"+n)
      .then((res) => res.json())
      .then((data) =>setRecItems(data) );  }

  let existing = sessionStorage.getItem("cart");
  if (existing != null && existing != [] && existing != Array(0))
  {
    console.log("Cart Items",cartItems)
    cartItems = JSON.parse(existing)
    cartItems?.map((el) => priceTotal+=Number(el.price))
    //get reccommended products
    LoadRecs(cartItems[0]?._id,3)
  }
  function addToCart(value){ 
    cartItems.push(value)
    sessionStorage.setItem('cart', JSON.stringify(cartItems))
    window.location.reload()
  }
  function removeProductFromCart(objectId){
    if (cartItems.length == 1){
      cartItems = [];
    }
    else{cartItems= cartItems.filter(function(val,idx,arr) {console.log("clog"+objectId);return val._id == objectId;})}
    sessionStorage.setItem("cart",JSON.stringify(cartItems))
    recItems = []
    window.location.reload()
  }
  function clearCart(){
    cartItems = []
    sessionStorage.setItem("cart",JSON.stringify(cartItems))
    window.location.reload()
    recItems = []
  }

  return (
    <>
      <div className="cart-header">
      </div>
      <div className="cart-products">
        <ul>
          {cartItems?.map((el, index) => (
            <>
            <div className="product-container">
              <li>{el.name}</li>
              <li>Age: {el.age}</li>
              <li>${el.price}</li>
              <li><img src={el.images} /></li>
              <li><button className="remove-button" onClick={()=>(removeProductFromCart(el._id))}>Remove</button></li>
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
      <div className="checkout-header" >
        {cartItems.length>0?<>
        <h1>Cart total: {priceTotal}</h1>
        <button style={{ display: checkout ? "none" : "block" }} onClick={() => setCheckout(!checkout)}>Checkout </button>
        <button onClick={() => clearCart()}>Clear Cart</button></>:'Your cart is empty!'}
      </div>
      <h1 className="recs-header">{cartItems.length>0?("Recommendations"):""}</h1>
      <div className="cart-recs">
        <ul>
          {recItems?.map((el, index) => (
            <>
            <div className="product-container">
              <li>{el.name}</li>
              <li>Age: {el.age}</li>
              <li>${el.price}</li>
              <li><img src={el.images} /></li>
            </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;
