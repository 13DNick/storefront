import React from "react";
import Link from "./Link";

const SearchResults = (props) => {

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


    if(props.products.length !== 0){
        return(
            <div className="ui centered cards three">
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