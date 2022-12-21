import React from 'react';
import { Rating } from 'semantic-ui-react';

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
            <div className='content center aligned'>
                <img className="ui image small" src={props.product.imageURL} alt="" style={{marginTop: '1em'}}/>
            </div>
                
            <div className="content">
                <div className="header">{props.product.name}</div>
                <div className="description">
                    <div className='ui header' style={{fontWeight: 'normal'}}>${props.product.price.toFixed(2)}</div>
                </div>
            </div>
            <div className="extra content">
                <Rating icon="star" 
                    defaultRating={Math.round(props.product.rating)} 
                    maxRating={5} size="large" disabled/>
                &nbsp;&nbsp;&nbsp;{props.product.ratingCount} Ratings
            </div>
        </a>
   );
}

export default Product;