import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function CartButton(){

    return(
        <>
        <button>
            Add to Cart
        </button>
        <Link to={"/"}>
            <button>Keep Shopping</button>
        </Link>
        <Link to={"/cart"}>
            <button>Checkout</button>
        </Link>
        </>
    )
}

export default CartButton