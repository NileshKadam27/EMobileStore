import react from 'react';
import CartService from '../Service/CartService';
import CartDetails from './CartDetails';

class ShowCart extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            cart:[],
            price:0
           
        }
        
    }
    componentDidMount(){
        if(localStorage.getItem('user')!==null){
        var cId=JSON.parse(localStorage.getItem('user')).result.customerId;
    
        CartService.getCart(cId).then(
            (response) => {
            
            const data=JSON.stringify(response);
            //console.log(data.data.result);
            const data1=JSON.parse(data);
            console.log(data1.data.result);
            
            this.setState({
                cart:data1.data.result
                
            })
            this.state.cart.forEach(item=>{
                console.log("data");
  
                this.setState({
                    price:this.state.price+item.price
                })
            })
            if(this.state.price===0){
                document.getElementById("isEmpty").classList.add('emptycart');
                document.getElementById("emptymassage").classList.remove('showmassage');
            }
             
             
            },
            error => {
              
    
              
            }
          );}



         
          
        
        
       
    }
    buy(){
        var cId=JSON.parse(localStorage.getItem('user')).result.customerId;
    
        CartService.getCart(cId).then(
            (response) => {
            const data=JSON.stringify(response);
            const data1=JSON.parse(data);
            console.log(data);
            console.log(data1);
            sessionStorage.setItem("cart",data);
            window.location="/address";
             
             
            },
            error => {
              
    
              
            }
          );

         
       
    }
    render(){
        return<div>
            {
                            this.state.cart.map(item=>(


                                
                           <CartDetails
                                imgurl={item.products.image}
                                productName={item.products.productName}
                                price={item.price}
                                pId={item.products.productId}
                                productBrand={item.products.productBrand}
                                quantity={item.quantity}
                                productColor={item.products.productColor}

                                
                               
                            >
                               

                           </CartDetails>


                           
                            )
                           )
            }
            <div id="isEmpty" >
            <h4 style={{marginLeft:"30%",position:"absolute",marginTop:"4%"}}>Total Price:{this.state.price}</h4>

            <button style={{marginLeft:"32%",width:"20%",marginTop:"100px"}} className="btn btn-warning" onClick={this.buy}>Buy Now</button>

            </div>
            <div id="emptymassage" class="showmassage">
                <h3>Your Cart is Empty !!!!</h3>
            </div>
            
           

        </div>
    }
}

export default ShowCart;

