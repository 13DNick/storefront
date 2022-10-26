import React from "react";
import Product from "./Product";

const CartView = (props) => {
    
    const renderedProducts = props.cartItems.map(product => {
        return(
            <Product product={product} key={product.id} onProductSelect={(product) => props.onProductSelect(product)}/>
        );
    });
    
    return(
        <div>
            <div className="ui header">
                Cart view
            </div>
            <div className="ui centered cards three">
                {renderedProducts}
            </div>
        </div>
    );
}

export default CartView;