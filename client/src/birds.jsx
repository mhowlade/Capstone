import CartButton from "./cartbutton";
import "./birds.css";

function Birds({products}) {

  const info = products.filter((products) => products.animal.includes("bird"));

  console.log("bird info sorted", info);
  return (
    <>
      <div className="reptilespage">
        
        <section id="reptiles">
          <h4>Fly Fly Fly away</h4>
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
                  <CartButton  />
                  {/* purchase ={el._id} */}
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
