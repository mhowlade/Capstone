import CartButton from "./cartbutton";

function Aquatic(props) {

  return (
    <>
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
    </>
  );
}

export default Aquatic;
