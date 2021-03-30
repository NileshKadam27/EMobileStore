import react from 'react';
import OrderService from '../Service/OrderService';
class Update extends react.Component{
    constructor(props){
        super(props);
        this.setoId=this.setoId.bind(this);
    }
    setoId(){
       console.log("hello");
       console.log(this.props.oId+","+this.props.status);
       sessionStorage.setItem("oId",JSON.stringify(this.props.oId));
       sessionStorage.setItem("status",JSON.stringify(this.props.status));
       window.location="/UpdateStatus";

       
    }
    render(){
        return(<div>
            <button className="btn btn-success" onClick={this.setoId} style={{marginTop:"10px"}}>Update</button>
            

        </div>)
    }
}
export default Update;