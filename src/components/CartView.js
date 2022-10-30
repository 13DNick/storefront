import React from "react";
import { Order } from "../entities/Order";
import { OrderItem} from "../entities/OrderItem";
import { Customer } from "../entities/Customer";
import { Purchase } from "../entities/Purchase";
import backendAPI from "../api/backendAPI";
import { OrderHelper } from "../entities/OrderHelper";
import Link from './Link';


class CartView extends React.Component {
    
    state = {
        orderItems: [],
        order: {},
        firstName: '',
        lastName: '',
        email: '',
        orderTrackingNumber: ''
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
    
                const orderItem = OrderItem(item.name, item.price, count, item.price * count, item.imageURL, cartItems[i].id);
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

        let customer = Customer(this.state.firstName, this.state.lastName, this.state.email);

        let orderH = OrderHelper(Number(this.state.order.totalPrice), this.state.order.totalQuantity);

        let purchase = Purchase(customer, orderH, this.state.orderItems);

        this.submitPurchase(purchase);
    
    }

    submitPurchase = async (purchase) => {
        const jsonPurchase = JSON.stringify(purchase);
        const response = await backendAPI.post(`/checkout/purchase`, jsonPurchase, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.setState({orderTrackingNumber: response.data.orderTrackingNumber});
    }

    resetCart = () =>{
        this.setState({
            orderItems: [],
            order: {},
            firstName: '',
            lastName: '',
            email: '',
            orderTrackingNumber: ''
        });
        this.props.reset();
    }

    beforeCheckoutView = () => {
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
    }

    afterCheckoutView = () => {
        return(
            <div className="ui center aligned container text">
                <i aria-hidden="true" className="check circle massive icon" style={{color: 'green'}}></i>
                <div className="ui center aligned header">
                    <div className="content">Thank you for your order!</div>
                    <div className="content">Order Tracking Number: {this.state.orderTrackingNumber}</div>
                </div>
                <div className="ui blue animated button" onClick={this.resetCart}>
                    <Link href="/categories">
                        <div className="visible content" style={{color: '#FFF'}}>
                            Confirm
                        </div>
                        <div className="hidden content" style={{color: '#FFF'}}>
                            <i aria-hidden="true" className="long arrow alternate left large icon"></i>
                        </div>
                    </Link>
                </div>
            </div>   
        );
    }
    
    render(){
        
        if(this.state.orderTrackingNumber === ''){
            return(
                <div>{this.beforeCheckoutView()}</div>
            );
        } else {
            return(
                <div>{this.afterCheckoutView()}</div>
            );
        }
        
        
    };
    
}

export default CartView;