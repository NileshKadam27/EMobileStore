import react from 'react';
import ProductDetails from './ProductInfo';

class Product extends react.Component{

   constructor(props){
       super(props);
      
   }
 

   detailpage=()=>{

   sessionStorage.setItem("details",JSON.stringify(this.props));
   window.location="/details";


   }
    render(){
        return(<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          
              <br></br>
                          <img src={this.props.imgurl+".jpg"} width="200" height="200"  style={{cursor:"pointer"}} onClick={this.detailpage}></img>
                          <h4>{this.props.productName}</h4>
                          <h4>Price:Rs {this.props.price}</h4>
                          <br></br>
                          
                      
                  
        </div>)
    }
}

export default Product;