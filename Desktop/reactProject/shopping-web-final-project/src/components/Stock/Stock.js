import React, { Component } from 'react'
import ProductService from '../../Services/ProductService';
import {connect} from 'react-redux';
import {authenticateUser} from '../../Services/index';

class Stock extends Component {
    constructor(props){
        super(props)

        this.state = {
            //ต้องเก็บเกี่ยวกับไอดีสินค้า ทำสามคอมลัน์ชื่อสินค้า ราคา สต็อก
            products: [],
            product: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        console.log("yes" + id);
        ProductService.deleteProduct(id).then(res => {
            this.setState({
                product: this.state.product.filter(prod => prod.product_id !== id)
            });
            alert("Deleted");
        });
    }

    componentDidMount(){
        ProductService.getProductByOwner(this.props.auth.users.email).then((res) => {
            this.setState({products: [res.data]});
            console.log("Wow " +JSON.stringify(this.state.products));
            console.log("Try " +JSON.stringify(this.state.products[0]));
            this.setState({product: this.state.products[0]});
            console.log("Test " +JSON.stringify(this.state.product));
            //console.log("=>"+JSON.stringify(this.state.stock));
        });
        /*ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
            console.log(JSON.stringify(this.props.auth.users.email))
        });*/
    }

    render() {
        return (
            <div>
                <div className="row">
                    
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.product.map(
                                product => (
                                <tr>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <div>
                                        <span onClick={() => this.deleteProduct(product.product_id)} style={{cursor:'pointer'}}><i class="fas fa-trash"></i></span>
                                        </div>
                                    </td>
                                </tr>)
                            )
                        }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Stock);