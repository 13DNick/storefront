import React from "react";
import ProductsInCategory from "./ProductsInCategory";

const Category = (props) => {
    return(
        <div className="">
            <h1>{props.category.name}</h1>
            <ProductsInCategory products={props.category.products}/>
        </div>
    );
}

export default Category;