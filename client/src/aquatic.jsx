import CartButton from "./cartbutton";
import "./aquatic.css"

function Aquatic({products}) {

  const info = products.filter((products) => products.animal.includes("fish"));

  console.log("fish info sorted", info);

  return (
    <>
      <div className="aquaticpage">
      
        <section id="aquatics">
          <h4>Finding your Nemo</h4>
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
                  <CartButton />
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Aquatic;
