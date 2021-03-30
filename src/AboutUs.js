import react from 'react';

class AboutUs extends react.Component{
    render(){
        return(<div class="aboutbody">
            <div class="about-section">
  <h1>About Us Page</h1>
  <p>Emobile Shoppe is a user friendly application used to buy new and old mobiles easily</p>
  <p>Our Application manintain customer login,registration cart and  maintain order history also.Admin maintain all process from buy to delevery of product.</p>
 
</div>
<h2 style={{textAlign:"center"}}>Our Team</h2>
<div class="row">
  <div class="aboutcolumn" style={{marginLeft: "16%"}}>
    <div class="aboutcard">
      
      <div class="aboutcontainer" >
        <h2>Nilesh Kadam</h2>
        <p class="abouttitle">Admin</p>
        <p>Admin handels all purchase orders and maintain all products details.</p>
        <p>nilesh@emobilestore.com</p>
        <p><button class="aboutbutton">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="aboutcolumn">
    <div class="aboutcard">
      
      <div class="aboutcontainer">
        <h2>Devyani Shahu</h2>
        <p class="abouttitle">Admin</p>
        <p>Admin handels all purchase orders and maintain all products details.</p>
        <p>devyani@emobilestore.com</p>
        <p><button class="aboutbutton">Contact</button></p>
      </div>
    </div>
  </div>
  </div>
  
  

</div>)
    }
}

export default AboutUs;