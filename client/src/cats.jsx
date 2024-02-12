import "./styles/cats.css";
import CartButton from "./cartbutton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cats({ products }) {
  let [cartItems, setCartItems] = useState([]);

  console.log("cat page products props", products);

  const info = products.filter((products) =>
    products.animal.includes("cat")
  );
  sessionStorage.setItem("displayed_prod", JSON.stringify(info));
  sessionStorage.setItem("display_type", "cat");

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
  function setSelected(value){
    sessionStorage.setItem('selected',JSON.stringify(value))
  }
  return (
    <>
      <div className="catpage">
    
        <section id="cats">
        <h2>Where cats choose their humans</h2>
        <div className="big-container">
            {info?.map((el, index) => (
              <div className="container" key={el.index} onClick={()=>{setSelected(el)}}>
                <Link to="/details">
                  <img src={el?.images}></img>
                  <p>Name: {el?.name}</p>
                  <p>Age: {el?.age}</p>
                  <p>${el?.price}</p>
                  </Link>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Cats;
