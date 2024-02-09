import "./dogs.css"
import CartButton from "./cartbutton";

function Dogs({products}) {

  console.log('dog page', products)

  const info = products.filter((products) => products.animal.includes("dog"));

  console.log("dog info sorted", info);



  function handleSubmit(value){ 
    console.log('onclick value', value) 
    sessionStorage.setItem('id', value)
    let cartItems = []
    // Check this
    let existing = sessionStorage.getItem("cart");
    if (existing)
    {
      cartItems = JSON.parse(existing)
    }
    cartItems.push(info[value])
    sessionStorage.setItem('cart', JSON.stringify(cartItems))

  }
  return (
    <>
      <div className="dogpage">
        
        <section id="dogs">
          <h4>Woof Ryders</h4>
          <div className="big-container">
            {info?.map((el, index) => (
              <div className="container" key={el.index}>
                {/* <a href={"/" + el.name}>{el.name}</a> */}
                <img src={el.images}></img>
                <div>
                  <p>Name: {el.name}</p>
                  <p>Age: {el.age}</p>
                  <p>Description: {el.desc}</p>
                  <p>Size: {el.size}</p>
                  <p>Personality: {el.personality}</p>
                  <p>Price: {el.price}</p>
                  <button onClick={()=>handleSubmit(el._id)}>Add to Cart</button>
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
