import React, { Component } from "react";
import UserService from "../../Services/UserService";
import "./Form.css";
import profilePic from "./img/profilePic.PNG";
import AddProduct from "../../components/AddProduct/AddProduct";
import {connect} from 'react-redux';
import {authenticateUser} from '../../Services/index';
import ProductService from "../../Services/ProductService";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      users: [],
      hideProfile: false,
      hideEdit: true,
      hideAddProduct: true,
      blurMainProfile: false,    
      name:"",
      email:props.auth.users.email,
      password: props.auth.users.password,
      address:"",

      title:"",
      price: null,
      stock: null,
      own: props.auth.users.email,
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + " " + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    };
    this.handleClick = this.handleClick.bind(this);
    this.showAddProduct = this.showAddProduct.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  
  changeEmailHandler = (event) =>{
    this.setState({
        email: event.target.value
    });
  }

  changeNameHandler = (event) =>{
    this.setState({
        name: event.target.value
    });
  }

  changeAddressHandler = (event) =>{
    this.setState({
        address: event.target.value
    });
  }

  changeTitleHandler = (event) =>{
    this.setState({
        title: event.target.value
    });
  }
  changePriceHandler = (event) =>{
    this.setState({
        price: event.target.value
    });
  }
  changeStockHandler = (event) =>{
    this.setState({
        stock: event.target.value
    });
  }

  updateUser = (e) =>{
    this.setState({
        hideProfile: !this.state.hideProfile,
        hideEdit: !this.state.hideEdit,
    });

    e.preventDefault();
    let user = {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        id: this.state.id
    };

    {/*UserService.getUserById(2).then((res) => {
      const userd = res.data;console.log('user => '+  JSON.stringify(userd));
  });*/}

    
    UserService.editUserById(user, user.id);
  }

  handleClick() {
    this.setState({
      hideProfile: !this.state.hideProfile,
      hideEdit: !this.state.hideEdit,
    });
  }
  showAddProduct() {
    this.setState({
      hideAddProduct: !this.state.hideAddProduct,
      blurMainProfile: !this.state.blurMainProfile,
    });
    this.props.parentCallback(this.state.blurMainProfile);
  }
  addProduct = (event) =>{
    event.preventDefault();
    console.log(typeof this.state.own);
    let prod = {
      title: this.state.title,
      price: this.state.price,
      stock: this.state.stock,
      date: this.state.date,
      owner: this.state.own,
    };
    console.log(JSON.stringify(prod));
    ProductService.addProduct(prod).then(res =>{
      alert("Success Add Product");
      this.setState({
        title: this.state.title,
        price: this.state.price,
        stock: this.state.stock,
        date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + " " + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    }); 
    });
  }
  componentDidMount() {
    /*UserService.getUserInfo().then((res) => {
      this.setState({ users: res.data });
    });*/

    UserService.getUserByEmailAndPassword(this.state.email, this.state.password).then((res) => {
      let user = res.data;
      this.setState({ name: user.name, email: user.email, address: user.address, id: user.id});
    });

    /*UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({name: user.name,
            email: user.email,
            address: user.address
        });
    });*/
  }

  render() {
    return (
      <div>
        <div
          className="bigProfileContainer"
          id={this.state.blurMainProfile === true ? "blur" : ""}
        >
          {/*รูป ใต้รูปเป็น username
            ข้อมูล Name Email Address
            ปุ่ม edit your info and add product*/}

          <div className="subProfileContainer profile-center">
            <div>
              <img src={profilePic} alt="profile" className="profilePic" />
            </div>
            <div className="infoProfileBox">
              <div>
                <h1>Your information</h1>
                <div
                  id={this.state.hideProfile === true ? "non-active-profile" : ""
                  }
                >
                  {/*{this.state.users.map((user) => (
                    <div className="profileTop">
                      <h4>Name: {user.name}</h4>
                      <h4>Email: {user.email}</h4>
                      <h4>Address: {user.address}</h4>
                    </div>
                  ))}*/}
                  <div className="profileTop">
                      <h4>Name: {this.state.name}</h4>
                      <h4>Email: {this.state.email}</h4>
                      <h4>Address: {this.state.address}</h4>
                      
                    </div>
                </div>
                <div
                  className="editProfile"
                  id={this.state.hideEdit === true ? "non-active-edit" : ""}
                >
                  <div className="profileTop">
                    <form>
                      <div>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeNameHandler}/>
                        <label for="name">Name</label>
                      </div>
                      <div>
                        <input type="email" name="email" value={this.state.email} onChange={this.changeEmailHandler} disabled="true"/>
                        <label for="email">Email</label>
                      </div>
                      <div>
                        <input type="text" name="address" value={this.state.address} onChange={this.changeAddressHandler}/>
                        <label for="address">Address</label>
                      </div>
                      <button
                        href="#edit"
                        className="btn"
                        type="submit"
                        onClick={this.updateUser}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div
                className="editAddIcon"
                id={this.state.hideProfile === true ? "non-active-profile" : ""}
              >
                <a href="#edit" onClick={this.handleClick}>
                  <i className="fas fa-user-edit"></i>
                  <span>Edit profile</span>
                </a>
                <a href="#add-product" onClick={this.showAddProduct}>
                  <i className="fas fa-plus-circle"></i>
                  <span>Add your product for selling</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="addProductCenter"
          id={this.state.hideAddProduct === true ? "non-active-addProduct" : ""}
        >
          <div className="addProductBox">
            <div className="closeIcon">
              <i class="fas fa-times" onClick={this.showAddProduct}></i>
            </div>
            <form>
              <div>
                <input type="text" name="title" onChange={this.changeTitleHandler}/>
                <label for="name_product">Title</label>
              </div>
              <div>
                <input type="number" name="price" onChange={this.changePriceHandler}/>
                <label for="price">Price</label>
              </div>
              <div>
                <input type="number" name="stock" onChange={this.changeStockHandler}/>
                <label for="stock">Quantity in stock</label>
              </div>
              <button
                href="#addProductt"
                className="btn"
                type="submit" onClick={this.addProduct}
                
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return{
    authenticateUser: (emailLogin, passwordLogin) => dispatch(authenticateUser(emailLogin, passwordLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);