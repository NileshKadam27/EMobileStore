import react from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import orderService from '../Service/OrderService';
const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
class Orderaddress extends react.Component{
    constructor(props){
        super(props);
        this.state={
            address:"",
            state:"",
            dist:"",
            tal:"",
            pincode:""
        }
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangestate = this.onChangestate.bind(this);
        this.onChangeDist = this.onChangeDist.bind(this);
        this.onChangeTal = this.onChangeTal.bind(this);
        this.onChangePincode = this.onChangePincode.bind(this);
        this.placeOrder=this.placeOrder.bind(this);
    }
    componentDidMount(){
        let address=JSON.parse(localStorage.getItem("user")).result.address;
        let state=JSON.parse(localStorage.getItem("user")).result.state;
        let dist=JSON.parse(localStorage.getItem("user")).result.dist;
        let tal=JSON.parse(localStorage.getItem("user")).result.tal;
        let pincode=JSON.parse(localStorage.getItem("user")).result.pincode;
        this.setState({
            address:address,
            state:state,
            dist:dist,
            tal:tal,
            pincode:pincode
        })

    }
    onChangeAddress(e){

        this.setState({
            address:e.target.value
        })
    }
    onChangestate(e){

      this.setState({
          state:e.target.value
      })
  }
  onChangeDist(e){

    this.setState({
        dist:e.target.value
    })
}
onChangeTal(e){

  this.setState({
      tal:e.target.value
  })
}
onChangePincode(e){

  this.setState({
      pincode:e.target.value
  })
}
placeOrder(){
  let Address="Address:"+this.state.address+",State:"+this.state.state+",Dist: "+this.state.dist+", City:"+this.state.tal+", Pincode: "+this.state.pincode;
  let cId=JSON.parse(localStorage.getItem("user")).result.customerId;
  let cart=JSON.parse(sessionStorage.getItem("cart")).data.result;
  console.log(cart);
  let amount=0;
 
  cart.forEach(item=>{
    amount=amount+item.price
  });

  console.log(amount);
  orderService.placeOrder(cId,amount,Address).then(res=>{
    const data=JSON.stringify(res);
    //console.log(data.data.result);
    const data1=JSON.parse(data);
    console.log(data1);
    let oId=data1.data.result.orderId;
    sessionStorage.setItem("oId",JSON.stringify(oId));
    console.log(oId);
    cart.forEach(item=>{
      console.log(item)
      orderService.orderDetails(item.products.productId,oId,item.quantity,item.price,amount).then(res=>{
        
      })


    });
    window.location="confirmPage";

  })

 


  



}

    render(){
        return(<div>
            <div className="col-md-12">
          <div class="col-md-4"></div>
          <div class="col-md-4">
          
            <Form
            onSubmit={this.placeOrder}
            
          >
           

                <div className="form-group">
                 <h4>Address:</h4> <textarea rows="3"
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}                
                    onChange={this.onChangeAddress}
                    validations={[required]}
                  ></textarea>
                  
                </div>
                <div className="form-group">
                 <h4>State:</h4> <Input
                    type="text"
                    className="form-control"
                    name="state"
                    value={this.state.state}                
                    onChange={this.onChangestate}
                    validations={[required]}
                  />
                  
                </div>
                <div className="form-group">
                 <h4>District:</h4> <Input
                    type="text"
                    className="form-control"
                    name="dist"
                    value={this.state.dist }               
                    onChange={this.onChangeDist}
                    validations={[required]}
                  />
                  
                </div>
                <div className="form-group">
                 <h4>City:</h4> <Input
                    type="text"
                    className="form-control"
                    name="city"
                    value={this.state.tal }               
                    onChange={this.onChangeTal}
                    validations={[required]}
                  />
                  
                </div>
                <div className="form-group">
                 <h4>Pincode:</h4> <Input
                    type="text"
                    className="form-control"
                    name="pincode"
                    value={this.state.pincode }               
                    onChange={this.onChangePincode}
                    validations={[required]}
                  />
                  
                </div>
                
                


                <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
           
                </Form>
            
            </div>
            </div>
            <button style={{marginLeft:"400px",marginTop:"10px",width:"171px"}} className="btn btn-success" onClick={this.placeOrder}>Place Order</button>
            </div> 

       )
    }
}
export default Orderaddress;