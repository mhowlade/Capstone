import "./styles/dogs.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Dogs({products}) {
  let [cartItems, setCartItems] = useState([]);

  console.log('dog page', products)

  const info = products.filter((products) => products.animal.includes("dog"));

  console.log("dog info sorted", info);

  useEffect(() => {
    let existing = sessionStorage.getItem("cart");
    if (existing != null)
    {
      console.log("cart data exists")
      setCartItems(JSON.parse(existing))
    }
  },[]);

  function quickCheck(value){
    console.log("QC" + cartItems?.includes(value))
    return false;
  }

  function handleSubmit(value){ 
    if(value){
      cartItems.push(value);
      sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }
  function setSelected(value){
    sessionStorage.setItem('selected',JSON.stringify(value))
  }

  return (
    <>
      <div className="dogpage">
        <section id="dogs">
          <div className="big-container">
            {info?.map((el, index) => (
              <div className="container" key={el.index}>
                <div onClick={()=>{setSelected(el)}}>
                <Link to="/details" style={{ textDecoration: "none", color: "black" }}><>
                  <img src={el?.images}></img>
                  <p>Name: {el?.name}</p>
                  <p>Age: {el?.age}</p>
                  <p>${el?.price}</p></>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Dogs;
