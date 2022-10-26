import React from "react";
import { Rating } from "semantic-ui-react";

const ProductDetail = (props) => {  
    
    return(
        <div>
            <div className="ui centered center aligned vertically divided relaxed grid">
                <div className="two column row">
                    <div className="six wide column">
                        <img src={props.product.imageURL} alt={props.product.name} className="ui rounded large image"/>
                    </div>
                    <div className="ten wide column">
                        <div className="ui header" style={{fontWeight: "normal", fontSize: "3em"}}>{props.product.name}</div>
                        <div className="ui horizontal segments" style={{border: "none"}}>
                            <div className="ui segment">
                                <Rating icon="star" 
                                    defaultRating={Math.round(props.product.rating)} 
                                    maxRating={5} size="large" disabled/>
                                &nbsp;&nbsp;&nbsp;{props.product.ratingCount} Ratings
                            </div>
                            <div className="ui segment">
                                <div className="ui header">${props.product.price.toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="">{props.product.description}</div>
                        
                        <div className="ui right floated primary icon right labeled button" 
                             onClick={() => {props.addProductToCart(props.product)}} 
                             style={{marginTop: "1em"}}>
                            Add To Cart <i aria-hidden className="cart icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;