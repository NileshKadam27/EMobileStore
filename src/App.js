
import './App.css';
import React from 'react';
import BasicRouting from './BasicRouting';

class App extends React.Component {
  
  componentDidMount(){
    if(localStorage.getItem('user')!==null){
      const username=JSON.parse(localStorage.getItem('user')).result.email;
     this.refs.username.innerHTML=username;
     this.refs.logout.innerHTML="Logout";
     let element=document.getElementById("profilename");
     

    }
   

  }
  logout(){
    localStorage.removeItem("user");
    window.location="/";
  }
 
  
  mouseOverEvent(){
   


    if(localStorage.getItem('user')!==null){

      document.getElementById("profilemenu").classList.remove('displaycss');


  


    }
   


  }
  mycart(){
    if(localStorage.getItem('user')!==null){
      window.location="/showCart";
    }

  }
  myOrder(){
    
    window.location="/myOrder";

  }
  render(){
    return (
  
      <div >
        <div class="container">
          <h2>Welcome To Mobile Store</h2>
          <h4 style={{marginLeft:"1012px",position:"absolute",marginTop:"-31px"}}>Welcome, </h4>
          <br></br>
          <h4 ref="username" id="username" style={{marginLeft:"1012px",position:"absolute",marginTop:"-29px"}}>User</h4>
          
         
          <div class="dropdown" style={{cursor:"pointer",position:"absolute",marginTop:"-65px", marginLeft:"1137px"}}>
          <img src="./images/userlogo.png" style={{width:"37px"}}onMouseOver={this.mouseOverEvent}></img>
          <div id="profilemenu" class="displaycss">
          <div  class="dropdown-content"   >
             <a href="#">Profile</a>
             <a  ref="logout" id="logout"onClick={this.myOrder}>My Orders</a>
             <a  ref="logout" id="logout"onClick={this.logout}>Logout</a>
             
          </div>

         


          </div>
         
          

          </div>

          
      
  
         </div>
          <BasicRouting></BasicRouting>  
      </div>
      
    );

  }
  
}


export default App;

