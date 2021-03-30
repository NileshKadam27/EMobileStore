import react from 'react'
import OrderService from '../Service/OrderService';
import Detail from '../Order/Detail';
import Update from '../Admin/Update';
class ManageOrder extends react.Component{
    constructor(props){
        super(props);
        this.state={
            orders:[],
            status:""
            
            
           
        }
        this.update=this.update.bind(this)
       
       
       
    }

    componentDidMount(){
        
    OrderService.allOrders().then(res=>{
        const data=JSON.stringify(res);
            //console.log(data.data.result);
            const data1=JSON.parse(data);
            console.log(data1.data.result);
            
            this.setState({
                orders:data1.data.result
                
                
            })
            
      
      
    
    })
    
    
       
    }
   
    update(e){
        this.setState({
            status: e.target.value
          });
    }
    render(){
        
        return(<div>
           <h2 className="text-center"> Orders List</h2>   
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
                   this.state.orders.map(item=>
                       <tr key={item.OrderId}>
                           <td>{item.orderId}</td>
                           <td>{item.orderDate}</td>
                           <td>{item.amount}</td>
                           <td>{item.customerPhone}</td>
                           <td>{item.status}</td>
                           <td>{item.customerAddress}</td>
                           <Detail oId={item.orderId}></Detail>
                           <Update oId={item.orderId}
                                   status={this.state.status}></Update>
                                   <br></br>
                       </tr>
                   )
               }

            </tbody>

              
          </table>
          </div>
          

        </div>)
    }
}

export default ManageOrder;