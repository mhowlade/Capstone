import "./styles/home.css"
import { useEffect, useState } from "react";

function Home(props) {
   
  return (
    <>
    <div className='homepage'>
      <section id="featured">
        <h2>Today's Featured Friends</h2>

        <h2>All of our Friends</h2>
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
