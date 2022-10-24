import React from "react";
import ProductsInCategory from "./ProductsInCategory";

const CategoryDetail = (props) => {
    return(
        <div className="">
            <div className="ui header" style={{fontWeight: "normal", fontSize: "3em"}}>{props.category.name}</div>
            <ProductsInCategory products={props.category.products} onProductSelect={(props.onProductSelect)}/>
        </div>
    );
}

export default CategoryDetail;