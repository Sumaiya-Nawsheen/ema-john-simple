import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total+prd.price*prd.quantity,0);
    
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    } 
    else if(totalPrice>15){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping = 12.99;
    } 

    const tax = Math.round(totalPrice / 10);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4> Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p> Product Price: {totalPrice} </p>
            <p><small>Shipping Cost: {shipping}</small>  </p>
            <p> <small>Tax + Vat: {tax}</small></p>
            <p> Total Price: {grandTotal} </p>
            <br/>
           { props.children}
           
        </div>
    );
};

export default Cart;