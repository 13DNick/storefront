import React from "react";
import Link from "./Link";

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
        </div>
    );
}

export default Header;