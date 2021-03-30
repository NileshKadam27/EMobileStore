import react from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AddProductService from "../Service/AddProductService";
const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

class Addproduct extends react.Component{
constructor(props)
{
  super(props);
this.state={
 
  
  productName:"",
  productBrand:"",
  productColor:"",
  cpu:"",
  camera:"",
  weight:"",
  display:"",
  battery:"",
  image:"",
  memory:"",
  price:0,
  stock:0,
  massage:"",
  successful:false

}
this.saveHandler = this.saveHandler.bind(this);
this.onChange=this.onChange.bind(this);
}

  
  onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
  

  saveHandler=(e)=>{
    
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AddProductService.add(
        this.state.productName,
        this.state.productBrand,
        this.state.battery,
        this.state.camera,
        this.state.weight,
        this.state.cpu,
        this.state.display,
        this.state.image,
        this.state.memory,
        this.state.price,
        this.state.productColor,
        this.state.stock
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          alert("Added Successfully");
          window.location="/adminpage";
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
   
  }


  

  
  render(){
    return( <div className="col-md-12">
    <div class="col-md-4"></div> 
    <div class="col-md-4">
  <h2>Add Product</h2>
  <div className="card card-container">
    

    <Form
      onSubmit={this.saveHandler}
      ref={c => {
        this.form = c;
      }}
    >
      {!this.state.successful && (
        <div>

          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <Input
              type="text"
              className="form-control"
              name="productName"
              value={this.state.productName}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          


          <div className="form-group">
            <label htmlFor="peoductBrand">Company Name</label>
            <Input
              type="text"
              className="form-control"
              name="productBrand"
              value={this.state.productBrand}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          


          <div className="form-group">
            <label htmlFor="productColor">Color</label>
            <Input
              type="text"
              className="form-control"
              name="productColor"
              value={this.state.productColor}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpu">proccesser</label>
            <Input
              type="text"
              className="form-control"
              name="cpu"
              value={this.state.cpu}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="camera">Camera</label>
            <Input
              type="text"
              className="form-control"
              name="camera"
              value={this.state.camera}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">weight</label>
            <Input
              type="text"
              className="form-control"
              name="weight"
              value={this.state.weight}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="display">Display</label>
            <Input
              type="text"
              className="form-control"
              name="display"
              value={this.state.display}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="battery">Battery</label>
            <Input
              type="text"
              className="form-control"
              name="battery"
              value={this.state.battery}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="memory">Memory</label>
            <Input
              type="text"
              className="form-control"
              name="memory"
              value={this.state.memory}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">price</label>
            <Input
              type="number"
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Url</label>
            <Input
              type="text"
              className="form-control"
              name="image"
              value={this.state.image}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">stock</label>
            <Input
              type="number"
              className="form-control"
              name="stock"
              value={this.state.stock}
              onChange={this.onChange}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block">Add Product</button>
          </div>
        </div>
      )}

      {this.state.message && (
        <div className="form-group">
          <div
            className={
              this.state.successful
                ? "alert alert-success"
                : "alert alert-danger"
            }
            role="alert"
          >
            {this.state.message}
          </div>
        </div>
      )}
      <CheckButton
        style={{ display: "none" }}
        ref={c => {
          this.checkBtn = c;
        }}
      />
    </Form>
  </div>
</div>
</div>
);
  }
}

export default Addproduct;
