import react from 'react';
import CartService from '../Service/CartService';
class CartDetails extends react.Component{
    constructor(props){
        super(props);
        this.state={
            cart:{}
        }

        this.removeFromCart=this.removeFromCart.bind(this);    

    }
    componentDidMount(){
        
    }

    removeFromCart(){
        var cId=JSON.parse(localStorage.getItem('user')).result.customerId;
    
        CartService.removeCart(cId,this.props.pId,this.props.quantity).then(
            (response) => {
            
            window.location="/showCart";
             
             
            },
            error => {
              
    
              
            }
          );
        
       

        



    }
    render(){
        return(<div class="row">
             <div class="col-md-4">
                 <br></br>
                 <br></br>
            <img src={this.props.imgurl+".jpg"}style={{width:"280px"}}></img>
            <br></br>

        </div>
        <div class="col-md-8">
            <br></br>
            <br></br>
            <ul>
               
                    <h3>{this.props.productName}</h3>
               
                <li>
                    <h4>Company: {this.props.productBrand}</h4>
                </li>
                <li>
                    <h4>Color: {this.props.productColor}</h4>
                </li>
                <li>
                    <h4>Price: Rs {this.props.price}</h4>
                </li>
                <li>
                    <h4>Quantity: {this.props.quantity}</h4>
                </li>
            
            </ul>
            <button  className="btn btn-danger" onClick={this.removeFromCart}>Remove</button>

            
        </div>
        </div>)
    }
}
export default CartDetails;