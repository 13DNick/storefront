import React from "react";
import Link from "./Link";
import Cart from './Cart';

const Header = (props) => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Home
            </Link>
            <Link href="/categories" className="item">
                Categories
            </Link>
            <Link href="/products" className="item">
                Products
            </Link>
            <Link href="/cart" className="right floated item">
                <Cart cartItems={props.cartItems}/>
            </Link>
        </div>
    );
}

export default Header;