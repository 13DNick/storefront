import React from 'react';

const Product = (props) => {
   
    const handleClick = (e, product) => {
        e.preventDefault();
        props.onProductSelect(product);
        updateURL();
    }

    const updateURL = () => {
        //change url
        window.history.pushState({}, '', '/product');
   
        //tell components url has updated 
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
   
    return(
        <a className="ui card" href="/product" onClick={(e) => handleClick(e, props.product)}>
            <img className="ui image small floated centered" src={props.product.imageURL} alt=""/>
            <div className="content">
                <div className="header">{props.product.name}</div>
                <div className="meta">${props.product.price}</div>
                <div className="description">{props.product.description}</div>
            </div>
            <div className="extra content">{props.product.rating}/5 {props.product.ratingCount} ratings</div>
        </a>
   );
}

export default Product;