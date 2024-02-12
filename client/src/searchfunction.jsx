import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SearchFunction(){
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    let [info, setInfo] = useState([]);
    
    useEffect(() => {GetInfo();
    }, [searchTerm]);

    function GetInfo(){
    let productsdata = sessionStorage.getItem("displayed_prod")
    if(productsdata != null && productsdata !=''){
        setProducts(JSON.parse(productsdata))

    }
    let datatype = sessionStorage.getItem("display_type")
    if (datatype != null && datatype !=''){
    const infoD = products.filter((products) =>
      products.animal.includes(datatype)
    );
    setInfo(infoD);} 
    
    }
    function setSelected(value){
        sessionStorage.setItem('selected',JSON.stringify(value))
      }
    function handleSubmit(event){
        event.preventDefault();
        setSearchTerm(event.target.value)
        searchProduct()
    }

    async function searchProduct(){
        const results = info.filter((product) =>{
            console.log(searchTerm);
            if(
                JSON.stringify(product).toLowerCase().includes(searchTerm)){
                    return true
                }
            }); console.log(results);setSearchResults(results); 
        }

    return(
        <>
        <div className="search-wrap">
        <form className="search" onSubmit={handleSubmit}>
            <label></label>
            <input type='text' value={searchTerm} placeholder= 'Search' onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}/>
            <button onClick={(e)=>(searchProduct())}>Search</button>
        </form>
        
        <div className="search-products">
        <div className="cart-products">
        <ul>
          {searchResults?.map((el, index) => (
            <>
            <div className="product-container" onClick={()=>(setSelected(el))}>
            <Link to="/details" style={{ textDecoration: "none", color: "black" }}><>
                  <img src={el?.images}></img>
                  <p>Name: {el?.name}</p>
                  <p>Age: {el?.age}</p>
                  <p>${el?.price}</p></>
                  </Link>
            </div>
            </>
          ))}
        </ul>
      </div>
        </div>
        </div>
        </>

    )

}

export default SearchFunction