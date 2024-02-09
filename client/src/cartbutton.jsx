import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function CartButton(){
    // console.log('cart button', purchase)
    // let purchases = JSON.parse(sessionStorage.getItem("cart"))

    // if (purchases != [])
    //     sessionStorage.setlItem("cart", JSON.stringify(purchase))

    return(
        <>
        <button>
            Add to Cart
        </button>
        {/* <Link to={"/"}>
            <button>Keep Shopping</button>
        </Link>
        <Link to={"/cart"}>
            <button>Checkout</button>
        </Link> */}
        </>
    )
}

export default CartButton