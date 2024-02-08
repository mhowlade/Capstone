import "./home.css"

function Home(props) {
  return (
    <>
      <h1>Byte Bosses Pet Store</h1>

      <section>
        <h3>Popular items</h3>
      </section>
      <hr />
      <section id="categories">
        <h4>All Items</h4>
        <ul>
        {props.categories?.map((el, index) => (           
            <><a href={"/" + el.name}>{el.name}</a><p>{el.image_url}</p></>
        ))}
        </ul>
      </section>
    </>
  );
}
export default Home;
