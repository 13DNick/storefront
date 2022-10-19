import React, { useState, useEffect } from "react";
import backendAPI from "../api/backendAPI";

const Products = (props) => {
    
    const [products, setProducts] = useState([]);
    
    //load all products on component render
    useEffect(() => {
        getProducts();
    }, []);

    //retrieve all products
    const getProducts = async () => {
        const response = await backendAPI.get('/products');
        setProducts(response.data);
    }

    const renderedProducts = products.map(product => {
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
        <div className="ui centered cards three">
            {renderedProducts}
        </div>
    );
}

export default Products;