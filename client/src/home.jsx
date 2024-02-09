import "./home.css"

function Home(props) {
  
  return (
    <>
    <div className='homepage'>
      <h1>Binary Bosses Pet Store</h1>
      <section id="categories">
        <h2>ALL OF OUR FRIENDS</h2>
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
