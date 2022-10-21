import React from "react";

const ProductsInCategory = (props) => {
    
    const renderedProducts = props.products.map(product => {
        return(
            <div className="ui card" key={product.id}>
                <img className="ui image small floated centered" src={product.imageURL} alt=""/>
                <div className="content">
                    <div className="header">{product.name}</div>
                    <div className="meta">${product.price}</div>
                    <div className="description">{product.description}</div>
                </div>
                <div className="extra content">{product.rating}/5 {product.ratingCount} ratings</div>
            </div>
        );
    });
    
    return(
        <div className="ui centered cards two">
            {renderedProducts}
        </div>
    );
}

export default ProductsInCategory;