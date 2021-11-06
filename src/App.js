import React, { Component } from "react";
import CartItem from "./Components/CartItem/CartItem";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

export default class App extends Component {

  state = {
    cartItem:[]
  }

  addItem = (item) => {
    let exists = this.state.cartItem.find((cartItemValue)=> cartItemValue.id === item.id);
    if(exists) {
      let cart = this.state.cartItem.map((cartItemValue)=>cartItemValue.id === item.id ? {...exists , qty:exists.qty+1} : cartItemValue);
      this.setState({cartItem:cart});
    } else {
    let cart = [...this.state.cartItem , {...item , qty:1}]; 
    this.setState({cartItem:cart})  
    }
  }

  decrementItem = (item) => {
    let exists = this.state.cartItem.find((cartItemValue)=> cartItemValue.id === item.id);
    if(exists.qty > 1) {
      let cart = this.state.cartItem.map((cartItemValue)=>cartItemValue.id === item.id ? {...exists , qty:exists.qty-1} : cartItemValue);
      this.setState({cartItem:cart});
    }
  }

  deleteItem = (item) => {
    let cart = this.state.cartItem.filter(value=>value.id !== item.id);
    this.setState({cartItem:cart})
  }

  render() {
    let totalQty = this.state.cartItem.reduce((x,y)=>x + y.qty,0);
    let totalPrice = this.state.cartItem.reduce((x,y)=>x + y.qty*y.price,0);
    return (
      <>
        <Navbar totalPrice = {totalPrice} totalQty = {totalQty} />
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Products addItem = {this.addItem}/>
            </div>
            <div className="col-lg-3">
              <CartItem deleteItem = {this.deleteItem} addItem = {this.addItem} decrementItem = {this.decrementItem} cartItem = {this.state.cartItem} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
