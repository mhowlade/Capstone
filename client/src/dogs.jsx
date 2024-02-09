import "./dogs.css"
import CartButton from "./cartbutton";

function Dogs({products}) {

  console.log('dog page', products)

  const info = products.filter((products) => products.animal.includes("dog"));

  console.log("dog info sorted", info);
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

export default Dogs;
