import react from 'react';
import OrderSercice from '../Service/OrderService';
class OrderDetails extends react.Component{
    constructor(props){
        super(props);
        this.state={
            details:[]
            
        }
    }
componentDidMount(){
   
       let oId=JSON.parse(sessionStorage.getItem("oId"));  
       OrderSercice.myOrderDetails(oId).then(res=>{
        const data=JSON.stringify(res);
        //console.log(data.data.result);
        const data1=JSON.parse(data);
        //console.log(data1.data.result);
        
        this.setState({
            details:data1.data
            
            
        })
        console.log(this.state.details);

       })  






}

    render(){
        return(<div>
            <h2 className="text-center">Order Details</h2>   
           <div className="row">
          <table className="table table-stripad table bordered">
              
          <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Color</th>
                    <th>Product Quantity</th>
                    <th>Price(Rs)</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                
               {
                   this.state.details.map(item=>
                       <tr key={item.OrderId}>
                           <td>{item.pId}</td>
                           <td>{item.productName}</td>
                           <td>{item.productColor}</td>
                           <td>{item.quantity}</td>
                           <td>{item.price}</td>

                       </tr>
                   )
               }

            </tbody>

              
          </table>
          </div>
          

        </div>)
    }
}
export default OrderDetails;