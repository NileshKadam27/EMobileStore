import react from 'react';
import OrderService from '../Service/OrderService';
class UpdateStatus extends react.Component{
    constructor(props){
        super(props);
        this.state={
            status:""
        }
        this.update=this.update.bind(this);
        this.setoId=this.setoId.bind(this);
    }

    update(e){
        this.setState({
            status:e.target.value
        })
    }
    setoId(){

        let oId=JSON.parse(sessionStorage.getItem("oId"));
        console.log(oId,this.state.status);
        OrderService.changeStatus(oId,this.state.status).then(res=>{
            alert("Updated");
            window.location="/manageOrder";
        })

    }
    render(){
        return(<div>
            <h2>Change the Status of Order Id:{JSON.parse(sessionStorage.getItem("oId"))}</h2>
            

            <select value={this.state.status} onChange={this.update}>
                <option>N/A</option>
                <option value="Order_Despached" >Order Despached</option>
                <option value="Order_Delivered">Order Delivered</option>
            </select>

            <button className="btn btn-success" onClick={this.setoId} style={{marginTop:"10px"}}>Change Status</button>
            

        </div>)
    }
}
export default UpdateStatus;