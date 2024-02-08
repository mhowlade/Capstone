

function Home(props) {
    return(
        <>
        <h1>All Starwars characters</h1>
        <section id="charactersList">
            {props.characters?.map((el, index) => (
                <div><a href={"/characters/"+el.id}>{el.name}</a></div>
            ))};
        </section>     
        </>
    )
    
}
export default Home;