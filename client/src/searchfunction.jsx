import { useState, useEffect } from "react";

function SearchFunction(){
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
    LoadProduct();
    LoadCategories();
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        searchProduct()
    }

    function LoadProduct() {
    fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }

    function LoadCategories() {
    fetch("http://localhost:3000/api/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }

    async function searchProduct(){
        const results = categories.filter((products) =>{
            if(
                products.name.includes(searchTerm) ||
                products.age.toString().includes(searchTerm) ||
                products.price.toString().includes(searchTerm)){
                    return true
                }
            })
        }
    


    return(
        <form className="search" onSubmit={handleSubmit}>
            <label></label>
            <input type='text' value={searchTerm} placeholder= 'Search' onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>

    )

}

export default SearchFunction