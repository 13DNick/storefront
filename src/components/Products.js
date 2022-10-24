import React, { useState, useEffect } from "react";
import backendAPI from "../api/backendAPI";
import Product from "./Product";

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
            <Product product={product} key={product.id} onProductSelect={(product) => props.onProductSelect(product)}/>
        );
    });

    return(
        <div className="ui centered cards three">
            {renderedProducts}
        </div>
    );
}

export default Products;