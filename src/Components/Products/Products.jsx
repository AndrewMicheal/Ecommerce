import React, { Component } from 'react'
import storeData from '../../store';

export default class Products extends Component {
    render() {
        return (
            <>
            <div className = "row mt-5 pt-5 text-center">
                {storeData.map((value , index)=> {
                    return(
                        <div className="col-lg-4 my-3" key = {index}>
                            <div className="item">
                                <img src={value.image} className = "w-100" height="320px" alt={value.title}/>
                                <div className="cartTitle">
                                    <h6 className = "my-4">{value.title}</h6>
                                    <span>${value.price}</span>
                                </div>
                                <button onClick = {()=>this.props.addItem(value)} className = "btn mainColor text-white w-100">Add To Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
                
            </>
        )
    }
}
