import axios from "axios";

const API_URL = "http://localhost:8080/mobilestore/customer";

class CartService {
  addToCart(cId,pId,price,quantity) {
    const fd=new FormData();
    fd.append('cId',cId);
    fd.append('pId',pId);
    fd.append('price',price);
    fd.append('quantity',quantity);
    
    return axios.post("http://localhost:8080/mobilestore/cart/addToCart",fd)
      .then(response => {
       
            
        return response;
      });
  }

  getCart(cId){
    
    return axios.get('http://localhost:8080/mobilestore/cart/getCart',{params:{cId}})
      .then(response => {
       
            
        return response;
      });

  }
  removeCart(cId,pId,quantity){
    
    return axios.get('http://localhost:8080/mobilestore/cart/deleteFromCart',{params:{cId,pId,quantity}})
      .then(response => {
       
            
        return response;
      });

  }

  
}

export default new CartService();
