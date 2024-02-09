import CartButton from "./cartbutton";
import "./aquatic.css"

function Aquatic(props) {

  return (
    <>
    <div className='aquaticpage'>
      <h1>Aquatic Page</h1>
      <section id="aquatics">
        <h4>Finding your Nemo</h4>
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

export default Aquatic;
