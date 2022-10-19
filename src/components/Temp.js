import React from 'react';

const Temp = (props) =>{
    return(
        <div>
            <h1>{props.product.name}</h1>
            <img src={props.product.imageURL}/>
        </div>
    );
}

export default Temp;