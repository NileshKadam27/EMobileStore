import react from 'react';
import OrderService from '../Service/OrderService';
class Cancel extends react.Component{
    constructor(props){
        super(props);
        this.setoId=this.setoId.bind(this);
    }
    setoId(){
        OrderService.removeOrder(this.props.oId).then(res=>{
            alert("Order Canceled");
            window.location="/myOrder";
        })

    }
    render(){
        return(<div>
            <button className="btn btn-success" onClick={this.setoId}>Cancel Order</button>
            

        </div>)
    }
}
export default Cancel;