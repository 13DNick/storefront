import React from "react";
import Product from "./Product";

const ProductsInCategory = (props) => {
    
    const renderedProducts = props.products.map(product => {
        return(
            <Product product={product} key={product.id} onProductSelect={(product) => props.onProductSelect(product)}/>
        );
    });
    
    return(
        <div className="ui centered cards two">
            {renderedProducts}
        </div>
    );
}

export default ProductsInCategory;