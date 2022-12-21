import React from "react";
import Link from "./Link";
import Product from './Product';

const SearchResults = (props) => {

    const renderedProducts = props.products.map(product => {
        
        return(
            <Product product={product} key={product.id} onProductSelect={(product) => props.onProductSelect(product)}/>
        );
    });

    const noProductsFound = () => {
        return(
            <div className="ui center aligned container text">
                <i aria-hidden="true" className="exclamation triangle massive icon" style={{color: 'red'}}></i>
                <div className="ui center aligned header">
                    <div className="content">
                    No Products Found
                    </div>
                </div>
                <div className="ui blue animated button">
                    <Link href="/categories">
                        <div className="visible content" style={{color: '#FFF'}}>
                            Go Back
                        </div>
                        <div className="hidden content" style={{color: '#FFF'}}>
                            <i aria-hidden="true" className="long arrow alternate left large icon"></i>
                        </div>
                    </Link>
                </div>
            </div>   
        );
    }

    //return search results if they exist - else return error display
    if(props.products.length !== 0){
        return(
            <div className="ui centered cards three stackable">
                {renderedProducts}
            </div>
        );
    } else {
        return(
            <div>
                {noProductsFound()}
            </div>
        );
    }

}

export default SearchResults;