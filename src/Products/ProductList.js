

import React from 'react';
import Product from './product';


class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={products:[]};
        console.log("constructor is invoked......");

    }

    // Compoent Life Cycle Method
    // that can be overrided
    // with new functionality

    componentDidMount (){
        console.log("componentDid Mount is invoked.....")
        // fetching data asynchronously from rest api , or might be server side data  GET request  using fetch
        fetch('http://localhost:8080/mobilestore/product/getProductList')
             .then(
                 async response=>{
                    const data=await response.json();
                    console.log("data");
                     if(!response.ok){      
                        const error=(data && data.message) || response.statusText;
                        return Promise.reject(error);
                     }
                     this.setState({ products: data})
                 })
                 .catch(error=>{
                     this.setState({errorMessage:error.toString()});
                     console.log(' There was an error !', error);
                 })
    }

    render(){
        return <div>
            
                        {
                            this.state.products.map(item=>(
                           
                               <Product
                                imgurl={item.image}
                                productName={item.productName}
                                price={item.price}
                                pId={item.productId}
                                productBrand={item.productBrand}
                                productColor={item.productColor}
                                cpu={item.cpu}
                                camera={item.camera}
                                weight={item.weight}
                                display={item.display}
                                battery={item.battery}
                                memory={item.memory}
                                stock={item.stock}
                                >    
                              </Product>
                           
                            )
                            )
                        }
                                 
                </div>
    }
}

export default ProductList;
