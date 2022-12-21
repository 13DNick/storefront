import React from "react";
import ProductsInCategory from "./ProductsInCategory";

const CategoryDetail = (props) => {
    //helper method to format category name
    const processName = (name) => {
        if(name === 'jewelery'){
            return 'Jewelry';
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    return(
        <div className="">
            <div className="ui header" style={{fontWeight: "normal", fontSize: "3em", marginBottom: "0.5em"}}>{processName(props.category.name)}</div>
            <ProductsInCategory products={props.category.products} onProductSelect={(props.onProductSelect)}/>
        </div>
    );
}

export default CategoryDetail;