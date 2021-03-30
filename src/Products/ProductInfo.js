import { TouchHistoryItem } from 'igniteui-react-core';
import react from 'react';
import CartService from '../Service/CartService';
class ProductInfo extends react.Component{

    constructor(props){
        super(props);
        this.state={
            Product:{},
            quantity:1,
            price:0
    
        }
        this.onChange=this.onChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        
    }
    componentDidMount(){
        let data=JSON.parse(sessionStorage.getItem('details'));
        this.setState({
            Product:data,
            price:data.price

           
            
            
        })
        console.log(data.imgurl);
        //sessionStorage.removeItem("details");
    }
    onChange(e){

        this.setState({
            quantity:e.target.value
        })

        
        
    }
       
        


    addToCart(){
        if(localStorage.getItem('user')!==null){
            let val= this.state.price * this.state.quantity;

           

           
         



            let cId=JSON.parse(localStorage.getItem('user')).result.customerId;
            let pId=JSON.parse(sessionStorage.getItem('details')).pId;
            
            CartService.addToCart(cId,pId,val,this.state.quantity).then(
                () => {
                  alert("Added In Cart Successfully");
                  
                  
                },
                error => {
                  
        
                 
                }
              );
            
            }else{
            alert("Login Please");
            window.location="/login";
        }



    }
    showCart(){
        window.location="/showCart";

    }
    
    render(){
        return(<div>
            <div class="row">
                <div class="col-md-4">
                <img src={this.state.Product.imgurl+".jpg"} style={{width:"350px"}}></img>
                
                
                </div>
                <div class="col-md-8">
                    
                        
                            <h1>{this.state.Product.productName}</h1>
                        
                        <ul>
                        <li>
                            <h4>Brand : {this.state.Product.productBrand}</h4>
                        </li>
                        <li>
                            <h4>Colour : {this.state.Product.productColor}</h4>
                        </li>
                        
                        <li>
                            <h4>Camera : {this.state.Product.camera}</h4>
                        </li>
                        <li>
                            <h4>Weight : {this.state.Product.weight}</h4>
                        </li>
                        <li>
                            <h4>Display : {this.state.Product.display}</h4>
                        </li>
                        <li>
                            <h4>Battery : {this.state.Product.battery}</h4>
                        </li>
                        <li>
                            <h4>Memory : {this.state.Product.memory} </h4>
                        </li>

                        
                        
                        
                        <li>
                            <h3>RS:{this.state.Product.price}</h3>
                        </li>
                        <li>
                            <h4>Stock : {this.state.Product.stock}</h4>
                        </li>
                        <li>
                            <h4 style={{display:"inline"}} >Quantity:&nbsp;&nbsp;</h4>
                            <input
                            type="number"
                            className="form-control"
                             name="quantity"
                            value={this.state.quantity}
                            onChange={this.onChange}
                            min="1"
                            style={{width:"100px",display:"inline"}}
              
                            />
                        </li>
                    </ul>
                    <button className="btn btn-success" onClick={this.addToCart}>Add to Cart</button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-success" onClick={this.showCart}>Show Cart</button>
                </div>
            </div>
           
        
        </div>)
    }
}

export default ProductInfo;