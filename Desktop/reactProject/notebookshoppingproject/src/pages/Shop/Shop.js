import React from 'react';
import CardProduct  from "../../components/CardProduct/CardProduct";
import './Shop.css';

const Shop = () => {
    return (
        <div>
            <div>Sort by</div>
            <div className="product-center container">
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            </div>
        </div>
    )
}

export default Shop;
