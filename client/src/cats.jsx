import "./cats.css";
import CartButton from "./cartbutton";

function Cats(props) {
  console.log('cat page products props', props.products);
  return (
    <>
      <h1> Cat Page</h1>
      <section id="cats">
        <h4>Cuddly Kitties</h4>
        {props.products?.map((el, index) => (
          <div>
            {/* <a href={"/" + el.name}>{el.name}</a> */}
            <p>{el.name}</p>
            <p>{el.age}</p>
            <p>{el.desc}</p>
            <p>{el.size}</p>
            <p>{el.personality}</p>
            <p>{el.price}</p>
            <p>{el.image_url}</p>
          </div>
        ))}
      </section>
      <CartButton />
    </>
  );
}

export default Cats;
