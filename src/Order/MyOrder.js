import react from 'react'
import OrderService from '../Service/OrderService';
import Detail from './Detail';
import Cancel from './Cancel';
class MyOrder extends react.Component{
    constructor(props){
        super(props);
        this.state={
            myorder:[],
            check:""
            
           
        }
        this.details=this.details.bind(this)
       
       
       
    }

    componentDidMount(){
        const cId=JSON.parse(localStorage.getItem('user')).result.customerId;
    OrderService.myOrder(cId).then(res=>{
        const data=JSON.stringify(res);
            //console.log(data.data.result);
            const data1=JSON.parse(data);
            console.log(data1.data.result);
            
            this.setState({
                myorder:data1.data.result,
                check:"hello"
                
            })
            console.log("check"+this.state.check);
            console.log(this.state.myorder);
      
      
    
    })
    
    
       
    }
    details(id){
        console.log(id);
        
    }
    
    render(){
        
        return(<div>
           <h2 className="text-center">My Orders</h2>   
           <div className="row">
          <table className="table table-stripad table bordered">
              
          <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Date</th>
                    <th>Amount(Rs)</th>
                    <th>Mobile no</th>
                    <th>Status</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                
               {
                   this.state.myorder.map(item=>
                       <tr key={item.OrderId}>
                           <td>{item.orderId}</td>
                           <td>{item.orderDate}</td>
                           <td>{item.amount}</td>
                           <td>{item.customerPhone}</td>
                           <td>{item.status}</td>
                           <td>{item.customerAddress}</td>
                           <Detail oId={item.orderId}></Detail>
                           <Cancel oId={item.orderId}></Cancel>
                       </tr>
                   )
               }

            </tbody>

              
          </table>
          </div>
          

        </div>)
    }
}

export default MyOrder;