import "./home.css"

function Home(props) {
  
  return (
    <>
    <div className='homepage'>
      <h1>Binary Bosses Pet Store</h1>
      <section>
        <h3>Popular items</h3>
      </section>
      <section id="categories">
        <h4>All Items</h4>
        <ul>
        {props.categories?.map((el, index) => (           
            <><a href={"/" + el.name}>{el.name}</a><p>{el.image_url}</p></>
        ))}
        </ul>
      </section>
    </div>
    </>
  );
}
export default Home;
