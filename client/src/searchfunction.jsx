import { useState, useEffect } from "react";

function SearchFunction(){
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        GetInfo()
    }, []);

    function GetInfo(){
    let productsdata = sessionStorage.getItem("displayed_prod")
    if(productsdata != null && productsdata !=''){
        setProducts(JSON.parse(productsdata))

    }
    
}
    
    let datatype = sessionStorage.getItem("display_type")
    if (datatype != null && datatype !=''){
    const info = products.filter((products) =>
      products.animal.includes(datatype)
    );} 

    function handleSubmit(event){
        event.preventDefault();
        setSearchTerm(event.target.value)
        searchProduct()
    }


    async function searchProduct(){
        const results =await datatype.filter((searchTerm) =>{
            if(
                products.name.includes(searchTerm) ||
                products.age.toString().includes(searchTerm) ||
                products.price.toString().includes(searchTerm)){
                    return true
                }
            }); setSearchResults(results); 
        }

    return(
        <>
        <form className="search" onSubmit={handleSubmit}>
            <label></label>
            <input type='text' value={searchTerm} placeholder= 'Search' onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>
        <div>
        
    
        </div>
        </>

    )

}

export default SearchFunction