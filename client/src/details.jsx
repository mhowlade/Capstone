
import "./styles/details.css"
import { useState, useEffect } from "react";

function Details({products}) {
  let [product, setProduct] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    let existing = sessionStorage.getItem("selected");
    let existingCart = sessionStorage.getItem("cart")
    if (existing != null)
    {
      console.log("selected product exists")
      setProduct(JSON.parse(existing))
    }
    if (existingCart != null)
    {
      console.log("cart exists")
      setCart(JSON.parse(existingCart)) 
    }
  },[]);

  function quickCheck(value){
    if (cart != null && cart != [])
    {
        console.log("QC" + cart?.includes(value))
    }
    return false;
  }

  function handleSubmit(value){ 
    if(value){
      cart.push(value);
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  return (
    <>  <div className="details">
        <div className="container" key={product?._id}>
        <div>
            <img src={product?.images}></img>
            <p>Name: {product?.name}</p>
            <p>Age: {product?.age}</p>
            <p>Description: {product?.desc}</p>
            <p>Size: {product?.size}</p>
            <p>Personality: {product?.personality}</p>
            <p>Price: {product?.price}</p>
            {quickCheck(product)? (
            <button>Remove from Cart</button>
            ):(
            <button onClick={()=>handleSubmit(product)}>Add to Cart</button>  
            )}
        </div>
        </div>
      </div>
    </>
  );
}

export default Details;
