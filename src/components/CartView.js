import React from "react";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import backendAPI from "../api/backendAPI";


class CartView extends React.Component {
    
    state = {
        orderItems: [],
        order: {},
        firstName: '',
        lastName: '',
        email: ''
    }

    componentDidMount(){
        this.setState({orderItems: this.createOrderItems(this.props.cartItems)},
            () => {
                this.setState({order: this.createOrder(this.state.orderItems)})
            }
        );
    }

    
    isItemAlreadyCreated = (items, name) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].name === name){
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
    
            if(!this.isItemAlreadyCreated(items, item.name)){
                for(let n = i+1; n < cartItems.length; n++){
                    if(cartItems[n].id === currentProductId){
                        count++;
                    }
                }
    
                const orderItem = OrderItem(item.name, item.price, count, item.price * count, item.imageURL);
                items.push(orderItem);
            }
        }
        return items;
    };
    
    createOrder = (items) => {
        let orderTotal = 0.00;
    
        items.forEach(item => {
            orderTotal += item.price;
        });
        
        let order = Order(orderTotal.toFixed(2), this.props.cartItems.length, items, new Date());
    
        return order;
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        let customer = (this.state.firstName, this.state.lastName, this.state.email);

        let purchase = (customer, this.state.order, this.state.orderItems);

        const response = this.submitPurchase(purchase);

        console.log(response);
    }

    submitPurchase = async (purchase) => {
        const response = await backendAPI.post(`/checkout/purchase`, JSON.parse(JSON.stringify(purchase)));
        return response.data;
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
                                        <div className="three column row" key={item.name}>
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
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div className="ui card">
                                    <div className="content">
                                        <div className="header">Enter Personal Information</div>
                                    </div>
                                    <div className="content">
                                        <div className='field'>
                                            <label>First Name</label>
                                            <input type="text" 
                                                onChange={(e) => {this.setState({firstName: e.target.value})}} 
                                                value={this.state.firstName}    
                                            />
                                        </div> 
                                        <div className='field'>
                                            <label>Last Name</label>
                                            <input type="text" 
                                                onChange={(e) => {this.setState({lastName: e.target.value})}} 
                                                value={this.state.lastName}    
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="content">
                                        <div className='field'>
                                            <label>Email Address</label>
                                            <input type="text" 
                                                onChange={(e) => {this.setState({email: e.target.value})}} 
                                                value={this.state.email}    
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className="ui card">
                                    <div className="content">
                                        <div className="header">Place Order</div>
                                    </div>
                                    <div className="content">
                                        <p>Quantity: {this.state.order.totalQuantity}</p>
                                        <p>Total price: ${this.state.order.totalPrice}</p>
                                    </div>
                                    <div className="content">
                                        <button className="ui green fluid button" style={{fontSize:'1em'}}>
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                        
            </div>
        );
    };
    
}

export default CartView;