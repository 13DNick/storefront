import React from "react";

const Cart = (props) => {
    
    const getTotal = () => {
        
        let total = 0.00;
        
        if(props.cartItems !== undefined && props.cartItems.length > 0){
            
            for(let i = 0; i < props.cartItems.length; i++){
                total += props.cartItems[i].price;
            }
            
            return <span>{total.toFixed(2)}</span>;
        } else {
            return <span>{total.toFixed(2)}</span>;
        }
    }

    return(
        <button className="ui primary compact animated mini button">
                <div className="visible content" style={{color: '#FFF'}}>
                    <span>$ {getTotal()}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <i aria-hidden className="cart icon"/>
                </div>
                <div className="hidden content" style={{color: '#FFF'}}>
                    <span>view cart</span>
                </div>
        </button>
    );
    
}

export default Cart;