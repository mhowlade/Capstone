import "./cats.css";
import CartButton from "./cartbutton";

function Cats({ products }) {
  console.log("cat page products props", products);
  console.log("cat page products ids", products.category_id);

  const info = products.filter((products) =>
    products.animal.includes("cat")
  );

  console.log("cat info sorted", info);
  return (
    <>
      <div className="catpage">
    
        <section id="cats">
          <h4>Cuddly Kitties</h4>
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

export default Cats;
