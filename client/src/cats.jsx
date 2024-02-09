import "./cats.css";
import CartButton from "./cartbutton";
import { useState, useEffect } from "react";

function Cats({ products }) {
  let [cartItems, setCartItems] = useState([]);

  console.log("cat page products props", products);

  const info = products.filter((products) =>
    products.animal.includes("cat")
  );

  console.log("cat info sorted", info);

  useEffect(() => {
    let existing = sessionStorage.getItem("cart");
    if (existing != null)
    {
      cartItems = JSON.parse(existing)
    }
  }, []);

  function handleSubmit(value){
    console.log('onclick value', value)
    cartItems.push(value)
    sessionStorage.setItem('cart', JSON.stringify(cartItems))
  }
  return (
    <>
      <div className="catpage">
    
        <section id="cats">
          <h4>Cuddly Kitties</h4>
          <div className="big-container">
          {info?.map((el, index) => (
            <div className="container" key={el.index}>
              <img src={el.images}></img> 
                <div>
                <p>Name: {el.name}</p>
                <p>Age: {el.age}</p>
                <p>Description: {el.desc}</p>
                <p>Size: {el.size}</p>
                <p>Personality: {el.personality}</p>
                <p>Price: {el.price}</p>
                {cartItems.some(item => item._id === el._id) ? (
                  <button onClick={()=>handleSubmit(el)}>Remove from Cart</button>
                ):(
                  <button onClick={()=>handleSubmit(el)}>Add to Cart</button>
                )}
                </div>
            </div>
          ))}
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Cats;
