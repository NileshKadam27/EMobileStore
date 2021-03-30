import react from 'react';



class Home extends react.Component{

    
    handleEvent = (event) => {
        if (event.type === "onMouseEnter") {
              
           } else {
               
           }
       }
    render(){
        return(
        <div class="container">
            
    <div class="row">
                <div id="bgimage" class="jumbotron " >
                  
                </div>
  </div>
  <div class="row">
                <div class="col-sm-4">
                    <h3>Smartphones</h3>
                    <p>The number of smartphone users worldwide today surpasses three billion and is forecast to further grow by several hundred million in the next few years</p>
                </div>

                <div class="col-sm-4">
                    <h3>Camera Features</h3>
                    <p>All high-end smartphones have multiple lenses with different functions, to make more use of a device's limited physical space</p>
                </div>

                <div class="col-sm-4">
                    <h3> Battery</h3>
                    <p>Battery is one of the most important parts of a mobile phone or a tablet as this is what keeps the device mobile.</p>
                </div>


            
  </div>
           <div class="row">
           <h3>New Launching Smartphones</h3>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                   
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                    </ol>

                    <div class="carousel-inner">

                     
                    <div class="item active">
                    <img src="./images/Newfolder/carousal2.jpg" alt="carousal2"></img>
                  </div>
                  
                  <div class="item">
                    <img src="./images/Newfolder/carousal3.jpg" alt="carousal3"></img>
                  </div>
                            
                    
                    </div>
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
                    
                </div>
                    
             </div> 
  </div>

  );
    }
}

export default Home;