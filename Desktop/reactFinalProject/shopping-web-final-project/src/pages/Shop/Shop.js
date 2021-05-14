import React, { Component } from 'react';
import { CardProduct }  from "../../components/CardProduct/CardProduct";
import ProductService from '../../Services/ProductService';
import './Shop.css';

class Shop extends Component {
    /*const database = [
        {title: "Science G.5", author: "Mc Kallen", price: 20, id: "1"},
        {title: "Math G.4", author: "Joey", price: 25, id: "2"},
        {title: "Art G.1", author: "Gorche", price: 30, id: "3"},
        {title: "Music G.6", author: "Gorche", price: 20, id: "4"},
    ]*/

    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
            console.log(JSON.stringify(this.state.products));
        });
    }

    render (){
        return(
        <div className="bigContainer">
            
            <div className="product-center container">
                {
                    this.state.products.map(item => (
                        <CardProduct title={item.title} author={item.owner} price={item.price} id={item.product_id} qty={item.stock} />
                    ))
                }
            
            
            
            
            </div>
        </div>
        )
    }
}

export default Shop;
