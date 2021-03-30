import react from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from  "react-router-dom";
import Registercustomer from "./customer/Register";
import AdminLogin from "./Admin/login";
import Loginpage from "./customer/login";
import Home from "./Home";
import React from 'react';
import AdminPage from './Admin/AdminPage';
import ProductAdd from './Admin/Addproduct';
import ProductList from "./Products/ProductList";
import ProductDetails from './Products/ProductInfo';
import Orderaddress from './Order/Orderaddress';
import { PropertyChangedEventArgs } from 'igniteui-react-core';
import ShowCart from './Cart/ShowCart';
import ConfirmPage from './Order/ConfirmPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Myorder from './Order/MyOrder';
import OrderDetails from './Order/OrderDetails';
import ManageOrder from '../src/Admin/ManageOrder';
import UpdateStatus from '../src/Admin/UpdateStatus';
class BasicRouting extends react.Component{
    mycart(){
        if(localStorage.getItem('user')!==null){
          window.location="/showCart";
        }
    
      }
    render(){
        return(<div>
            <div class="container" style={{height:"1231px"}}>
            <Router>
              <div class="topnav">
              
              <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/Contact">Contact Us</Link><Link to="/catlog">Products</Link><Link to="/register">Sign Up</Link>
              <Link to="/login">Login</Link>
              <Link to="/admin">Admin</Link>
              <img src="./images/cart.jpg" style={{width:"61px", marginLeft:"469px",marginTop:"0px", position:"absolute",cursor:"pointer"}} onClick={this.mycart}></img>
              
              </div>
              
             <br></br>
               <Switch>
                 <Route exact path="/"><Homepage></Homepage></Route>
                 <Route path="/catlog"><Catlog></Catlog></Route>
                 <Route path="/about"><About></About></Route>
                 <Route path="/Contact"><Contact></Contact></Route>
                 <Route path="/register"><Register></Register></Route>
                 <Route path="/admin"><AdminLogin></AdminLogin></Route>
                 <Route path="/login"><Login></Login></Route>
                 <Route path="/adminpage"><Adminpage></Adminpage></Route>
                 <Route path="/addproduct"><AddProduct></AddProduct></Route>
                 <Route path="/details"><Details></Details></Route>
                 <Route path="/showCart"><Showcart></Showcart></Route>
                 <Route path="/address"><OrderAddress></OrderAddress></Route>
                 <Route path="/confirmPage"><Confirmpage></Confirmpage></Route>
                 <Route path="/myOrder"><MyOrder></MyOrder></Route>
                 <Route path="/orderDetails" ><Orderdetails></Orderdetails></Route>
                 <Route path="/manageOrder"><Manageorder></Manageorder></Route>
                 <Route path="/updateStatus"><Updatestatus></Updatestatus></Route>
               </Switch>
            </Router>
            </div>
            <br></br>
           <footer>
           <div class="container"> 
           <ul style={{marginLeft:"27%"}}> 
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="catlog">Products</a></li>
                        <li><a href="login">Login</a></li>
                        <li><a href="Contact">Contact Us</a></li>
                    </ul>
        
                    <div class="copyrights" >© Ecommerse:Mobile Store-2021 - All right reserved</div>
                    <div class="social"> 
                    <ul> 
                    <li><img src="images/fb.png"/></li>
                            <li><img src="images/twitter.png"/></li>
                            <li><img src="images/gogleplus.png"/></li>
                    </ul>
                    </div>
           
           </div>
           </footer>
           
          </div>
        
        
          );
        
    }
}

export default BasicRouting;

function Homepage(){
    return(<div>
       <Home></Home>
  
    </div>)
   
  }
  
  function Catlog(){
    return(<div>
  
      <ProductList></ProductList>
  
    
    </div>
  
    )
  }
  
  function About(){
    return(
      <div>
       <AboutUs></AboutUs>
      </div>
    )
  }
  
  function Contact(){
    return(
      <div>
        <ContactUs></ContactUs>
      </div>
    )
  }
  
  function Register(){
    return(<div>
      <Registercustomer></Registercustomer>
  
    </div>
  
    )
  }
  
  
  
  function Login(){
    return(<div>
      <Loginpage></Loginpage>
  
  
    </div>)
  }
  
  function Adminpage(){
    return(<div>
      <AdminPage></AdminPage>
    </div>)
  }
  function AddProduct(){
    return(<div>
     <ProductAdd></ProductAdd>
    </div>)
  }
  
  function Details(){
    return(<div>
      <ProductDetails></ProductDetails>
    </div>)
  }
  
  function Showcart(){
    return(<div>
      <ShowCart></ShowCart>
    </div>)
  }
  
  function OrderAddress(){
    return(<div>
      <Orderaddress></Orderaddress>
  
    </div>)
  }
  
  function Confirmpage(){
    return(<div>
      <ConfirmPage></ConfirmPage>
    </div>)
  }

  function MyOrder(){
      return(<div>
          <Myorder></Myorder>
      </div>)
  }
  function Orderdetails(){
    return(<div>
      <OrderDetails></OrderDetails>
    </div>)
  }

  function Manageorder(){
    return(<div>
      <ManageOrder></ManageOrder>
    </div>)
  }

  function Updatestatus(){
    return(<div>
      <UpdateStatus></UpdateStatus>
      </div>)
  }