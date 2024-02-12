import "./styles/cart.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  let [checkout, setCheckout] = useState(false);
  let [priceTotal, setPriceTotal] = useState(0);
  let [recItems, setRecItems] = useState([]);
  let [buyer, setBuyer]= useState("");
  let [email, setEmail]= useState("");
  let [addr, setAddress]= useState("");
  let [card, setCard]= useState("");

  let cartItems = []

  function LoadRecs(oid,n) {
    fetch("http://localhost:3000/api/recommendations/"+oid+"/"+n)
      .then((res) => res.json())
      .then((data) =>setRecItems(data) );  }
    
  useEffect(()=>{},[]);
  if(cartItems?.length<1)
  {
  let existing = sessionStorage.getItem("cart");
  if (existing != null && existing != [] && existing != Array(0))
    {
    cartItems = JSON.parse(existing)
    cartItems?.map((el) => priceTotal+=Number(el.price))
    //get reccommended products
    LoadRecs(cartItems[0]?._id,3)
    }
  }

  function removeProductFromCart(object){
    if (cartItems?.length>0){
    if (cartItems.length == 1){
      cartItems = [];
    }
    else{cartItems= cartItems.filter(function(val,idx,arr) {return val !== object;})}
    sessionStorage.setItem("cart",JSON.stringify(cartItems))
    recItems = []
    //window.location.reload()
  }}
  function clearCart(){
    if (cartItems?.length>0){cartItems = []
    recItems=[]
    sessionStorage.setItem("cart",JSON.stringify(cartItems))
    //window.location.reload()
    }
  }
  function setSelected(value){
    sessionStorage.setItem('selected',JSON.stringify(value))
  }

  async function createOrder(e,orders){
    e.preventDefault();
    let endpoint = "http://localhost:3000/api/purchase";
    let order = {
      'total': priceTotal,
      'buyer': buyer,
      'email': email,
      'addr' : addr,
      'card' : card,
      'products': orders
    };
    let data = {
      method: 'post',
      body: JSON.stringify(order),
      headers:{
        "Content-Type": "application/json"
      }
    };
    console.log(order)
    let response = await fetch(endpoint,data);
    setCheckout(false);
    console.log("Response",data)
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
              <li><button className="remove-button" onClick={()=>(removeProductFromCart(el))}>Remove</button></li>
            </div>
            </>
          ))}
        </ul>
      </div>
      <div className="checkout-header" style={{ display: checkout ? "block" : "none" }}>
        <form>
          <label>
            Name:
            <input type="text" value={buyer} onChange={(e)=>setBuyer(e.target.value)}/>
          </label>
          <label>
            e-mail:
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label>
            address:
            <input type="text" value={addr} onChange={(e)=>setAddress(e.target.value)} />
          </label>
          <label>
            card:
            <input type="text" value={card} onChange={(e)=>setCard(e.target.value)} />
          </label>
          <button onClick={async (e)=>{await createOrder(e,cartItems)}}>Confirm purchase</button>
        </form>
      </div>
      <div className="checkout-header" >
        {cartItems.length>0?<>
        <h1>Cart total: ${priceTotal}</h1>
        <button style={{ display: checkout ? "none" : "block" }} onClick={() => setCheckout(!checkout)}>Checkout </button>
        <button onClick={() => clearCart()}>Clear Cart</button></>:'Your cart is empty!'}
      </div>
      <h1 className="recs-header">{cartItems.length>0?("Recommendations"):""}</h1>
      <div className="cart-recs">
        <ul>
          {recItems?.map((el, index) => (
            <>
            <div className="product-container" onClick={()=>{setSelected(el)}}>
            <Link to="/details" style={{ textDecoration: "none", color: "black" }}>
              <li>{el.name}</li>
              <li>Age: {el.age}</li>
              <li>${el.price}</li>
              <li><img src={el.images} /></li>
              </Link>
            </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;
