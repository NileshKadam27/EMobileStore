import axios from "axios";

const API_URL = "http://localhost:8080/mobilestore/customer";

class OrderService {
  placeOrder(cId,amount,address){
    return axios.get('http://localhost:8080/mobilestore/order/addOrder',{params:{cId,amount,address}})
    .then(response => {
     
          
      return response;
    });

  }
  orderDetails(pId,oId,Quantity,price,amount){
    return axios.get('http://localhost:8080/mobilestore/orderDetails/addDetails',{params:{pId,oId,Quantity,price,amount}})
    .then(response => {
     
          
      return response;
    });

  }
  myOrder(cId){
    return axios.get('http://localhost:8080/mobilestore/order/myOrder',{params:{cId}})
    .then(response => {
     
          
      return response;
    });
  }
  allOrders(){
    return axios.get('http://localhost:8080/mobilestore/order/allOrder')
    .then(response => {
     
          
      return response;
    });
  }

  myOrderDetails(oId){
    return axios.get('http://localhost:8080/mobilestore/orderDetails/myOrderDetails',{params:{oId}})
    .then(response => {
     
          
      return response;
    });
  }

  removeOrder(oId){
    return axios.get('http://localhost:8080/mobilestore/orderDetails/deleteOrder',{params:{oId}})
    .then(response => {
     
          
      return response;
    });
  }
  changeStatus(oId,status){
    return axios.get('http://localhost:8080/mobilestore/order/changeStatus',{params:{oId,status}})
    .then(response => {
     
          
      return response;
    });
  }

  

  

  
}

export default new OrderService();
