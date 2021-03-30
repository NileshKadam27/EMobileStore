import react from 'react';

class AdminPage extends react.Component{

    addproduct(){
        window.location="/addproduct";
    }
    manageOrder(){
        window.location="/manageOrder";
    }
    render(){
        return(<div>
            

            <div class="row">
                <div id="bgimage1" class="jumbotron " >
                  
                </div>
                </div>
                <hr></hr>

                <a style={{fontSize:"30px"}}href="/addproduct">Add Product</a>
           <hr></hr>
            <a style={{fontSize:"30px"}} href="/manageOrder">Manage Orders</a>






        </div>)
    }
}

export default AdminPage;