import "./home.css"

function Home(props) {
  return (
    <>
      <h1>Byte Bosses Pet Store</h1>

      <section>
        <h3>Popular items</h3>
      </section>
      <section id="categories">
        <h4>All Items</h4>
        {props.categories?.map((el, index) => (
          <div>
            <a href={"/" + el.name}>{el.name}</a>
            <p>{el.image_url}</p>
          </div>
        ))}
      </section>
    </>
  );
}
export default Home;
