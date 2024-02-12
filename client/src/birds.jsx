import "./styles/birds.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

function Birds({products}) {
  let [cartItems, setCartItems] = useState([]);

  const info = products.filter((products) => products.animal.includes("bird"));
  sessionStorage.setItem("displayed_prod", JSON.stringify(info));
  sessionStorage.setItem("display_type", "bird");

  console.log("bird info sorted", info);

  useEffect(() => {
    let existing = sessionStorage.getItem("cart");
    if (existing != null) {
      cartItems = JSON.parse(existing);
    }
  }, []);

  function handleSubmit(value) {
    console.log("onclick value", value);
    cartItems.push(value);
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }
  function setSelected(value){
    sessionStorage.setItem('selected',JSON.stringify(value))
  }
  return (
    <>
      <div className="reptilespage">
        <section id="reptiles">
          <h1>Fly Fly Fly away</h1>
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

export default Birds;
