
import react from 'react';
class ConfirmPage extends react.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <h3>Your order has been placed successfully</h3>
           <h3> Order id:{JSON.parse(sessionStorage.getItem("oId"))}</h3>
           <h3>Payment Status: Cash On Delivery</h3>
            <h3>Within 7-10 days your product will be delivered to your confirm address</h3> 
            <h3>Thank you For Shopping With Us....</h3>




        </div>)
    }
    
}

export default ConfirmPage;