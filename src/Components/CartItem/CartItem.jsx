import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <>
                <div className = "mt-5 pt-5">
                    <h2 className = "cart-item-title">Cart Item</h2>
                    <div className="container">
                        <div className="row mt-4">
                            {this.props.cartItem.length === 0 ? <h5>Cart is empty</h5>  : ""}
                            {this.props.cartItem.map((value , index)=> {
                                return(
                                    <div key = {index}>
                                        <div className="col-lg-3 my-3">
                                            <div className="image">
                                                <img src={value.image} className ="w-100" alt={value.title}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <h6>{value.title}</h6>
                                            <p>${value.price}</p>
                                            <button onClick = {()=>this.props.addItem(value)} className = "btn btn-info text-white">+</button>
                                            <span className = "mx-2">{value.qty}</span>
                                            <button onClick = {()=>this.props.decrementItem(value)} className = "mx-1 btn btn-danger">-</button>
                                            <button onClick = {()=>this.props.deleteItem(value)} className = "btn btn-danger"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <hr className = "mt-4"/>
                                    </div>
                                );
                            })}
                        </div>
                        
                    </div>
                    
                   
                </div>
            </>
        )
    }
}
