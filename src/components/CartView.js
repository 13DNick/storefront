import React from "react";
import { Order } from "../entities/Order";
import { OrderItem} from "../entities/OrderItem";
import { Customer } from "../entities/Customer";
import { Purchase } from "../entities/Purchase";
import backendAPI from "../api/backendAPI";
import { OrderHelper } from "../entities/OrderHelper";
import Link from './Link';
import { Form } from "semantic-ui-react";


class CartView extends React.Component {
    
    state = {
        orderItems: [],
        order: {},
        firstName: '',
        lastName: '',
        email: '',
        orderTrackingNumber: '',
        validEmail: false, emailChanged: false,
        validFirstName: false, firstNameChanged: false,
        validLastName: false, lastNameChanged: false
    }

    componentDidMount(){
        this.setState({orderItems: this.createOrderItems(this.props.cartItems)},
            () => {
                this.setState({order: this.createOrder(this.state.orderItems)})
            }
        );
    }

    validateName = (name) => {
        if(name === "first"){
            if(this.state.firstName.length > 2) {
                this.setState({validFirstName: true});
            } else {
                this.setState({validFirstName: false});
            }
        } else {
            if(this.state.lastName.length > 2) {
                this.setState({validLastName: true});
            } else {
                this.setState({validLastName: false});
            }
        }
    }

    validateEmail = () => {
        const validEmailPattern = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
        
        if(validEmailPattern.test(this.state.email)){
            this.setState({validEmail: true});
        } else {
            this.setState({validEmail: false});
        }
    }

    handleFirstNameError = () => {
        if(!this.state.firstNameChanged){
            return false;
        } else {
            if(this.state.validFirstName){
                return false;
            } 
            return {
                content:"Please enter a valid first name.",
                pointing: "below"
            }
        }
    }

    handleLastNameError = () => {
        if(!this.state.lastNameChanged){
            return false;
        } else {
            if(this.state.validLastName){
                return false;
            } 
            return {
                content:"Please enter a valid last name.",
                pointing: "below"
            }
        }
    }

    handleEmailError = () => {
        if(!this.state.emailChanged){
            return false;
        } else {
            if(this.state.validEmail){
                return false;
            } 
            return {
                content:"Please enter a valid email address.",
                pointing: "below"
            }
        }
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
                                        <Form.Input label="First Name" 
                                            onChange={(e) => {this.setState({firstName: e.target.value, firstNameChanged: true}, 
                                                        this.validateName("first"))}
                                            } 
                                            value={this.state.firstName}
                                            error={this.handleFirstNameError()}
                                        /> 
                                        
                                        <Form.Input label="Last Name" 
                                            onChange={(e) => {this.setState({lastName: e.target.value, lastNameChanged: true}, 
                                                        this.validateName("last"))}
                                            } 
                                            value={this.state.lastName}
                                            error={this.handleLastNameError()}
                                        /> 
                                        
                                    </div>
                                    
                                    <div className="content">
                                    <Form.Input label="Email Address" 
                                            onChange={(e) => {this.setState({email: e.target.value, emailChanged: true}, 
                                                        this.validateEmail())}
                                            } 
                                            value={this.state.email}
                                            error={this.handleEmailError()}
                                        /> 
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
                            <i aria-hidden="true" className="checkmark icon"></i>
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