import React from "react";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";


class CartView extends React.Component {
    
    state = {
        orderItems: [],
        order: {}
    }

    componentDidMount(){
        this.setState({orderItems: this.createOrderItems(this.props.cartItems)},
            () => {
                this.setState({order: this.createOrder(this.state.orderItems)})
            }
        );
    }

    
    isItemAlreadyCreated = (items, id) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].product_id === id){
                return true;
            }
        }
        return false;
    }
    
    createOrderItems = (cartItems) => {
        let items = [];
        
        for(let i = 0; i < cartItems.length; i++){
            
            let currentProductId = cartItems[i].id;
            let count = 1;
            let item = cartItems[i];
    
            if(!this.isItemAlreadyCreated(items, currentProductId)){
                for(let n = i+1; n < cartItems.length; n++){
                    if(cartItems[n].id === currentProductId){
                        count++;
                    }
                }
    
                const orderItem = OrderItem(0, 0, currentProductId, item.name, item.price, count, item.price * count, item.imageURL);
                items.push(orderItem);
            }
        }
        return items;
    };
    
    createOrder = (items) => {
        let orderTotal = 0;
    
        items.forEach(item => {
            orderTotal += item.price;
        });
        
        let order = Order(0, orderTotal, items, new Date());
    
        return order;
    }

    
    render(){
        return(
            <div className="ui centered vertically divided grid">
                <div className="two column row">
                    <div className="twelve wide column">
                        <div className="ui centered vertically divided grid">
                            {
                                this.state.orderItems.map(item => {
                                    return(
                                        <div className="three column row" key={item.product_id}>
                                            <div className="four wide column"><img src={item.imageURL} className="ui rounded tiny image" alt=""/></div>
                                            <div className="eight wide column">
                                                <div className="ui header">{item.name}</div>
                                            </div>
                                            <div className="four wide column">
                                                <div>Unit price: ${item.unitPrice.toFixed(2)}</div>
                                                <div>Quantity: {item.quantity}</div>
                                                <div>Total: ${(item.price).toFixed(2)}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui container text">
                            <div className="ui card">
                                <div className="content">
                                    <div className="header">Place Order</div>
                                </div>
                                <div className="content">
                                    <p>Quantity: {this.props.cartItems.length}</p>
                                    <p>Total price: ${this.state.order.total}</p>
                                </div>
                                <div className="content">
                                    <button className="ui green fluid button" style={{fontSize:'1em'}}>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
            </div>
        );
    };
    
}

export default CartView;