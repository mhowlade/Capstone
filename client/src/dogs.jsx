import "./dogs.css"
import CartButton from "./cartbutton";

function Dogs(props) {

  console.log('dog page', props.products)
  return (
    <>
    <div className="dogpage">
      <h1>Dogs Page</h1>
      <section id="dogs">
        <h4>Woof Ryders</h4>
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
    </div>
    </>
  );
}

export default Dogs;
