import react from 'react';
class Detail extends react.Component{
    constructor(props){
        super(props);
        this.setoId=this.setoId.bind(this);
    }
    setoId(){
        sessionStorage.setItem("oId",JSON.stringify(this.props.oId));
        console.log("oid="+this.props.oId);
        window.location="/orderDetails";

    }
    render(){
        return(<div>
            <button className="btn btn-success" onClick={this.setoId}>Details</button>
            

        </div>)
    }
}
export default Detail;