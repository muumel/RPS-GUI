import React from 'react';
import CardProduct  from "../../components/CardProduct/CardProduct";
import './Shop.css';

const Shop = () => {
    return (
        <div className="bigContainer">
            <div>Sort by</div>
            <div className="product-center container">
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            
            
            
            
            </div>
        </div>
    )
}

export default Shop;
