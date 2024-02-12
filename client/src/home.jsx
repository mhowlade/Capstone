import "./styles/home.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home(props) {
  let [recItems, setRecItems] = useState([]);
  useEffect(()=>{LoadRecs()},[]);

  function LoadRecs() {
    fetch("http://localhost:3000/api/popular/5")
      .then((res) => res.json())
      .then((data) =>setRecItems(data) );  }

  function setSelected(value){
    sessionStorage.setItem('selected',JSON.stringify(value))
  }
  return (
    <>
    <div className='homepage'>
      <section id="featured">
        <h1>Featured pets!</h1>
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
      </section>
    </div>
    </>
  );
}
export default Home;
