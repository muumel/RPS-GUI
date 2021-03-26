import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CardProduct }  from "../../components/CardProduct/CardProduct";
import './Shop.css';

const Shop = () => {
    const database = [
        {title: "Science G.5", author: "Mc Kallen", price: "20", id: "1", qty: "0"},
        {title: "Math G.4", author: "Joey", price: "25", id: "2", qty:"0"},
        {title: "Art G.1", author: "Gorche", price: "30", id: "3", qty:"0"},
        {title: "Music G.6", author: "Gorche", price: "20", id: "4", qty:"0"},
    ]
    return (
        <div className="bigContainer">
            <div>Sort by</div>
            <div className="product-center container">
                {
                    database.map(item => (
                        <CardProduct title={item.title} author={item.author} price={item.price} id={item.id} qty={item.qty} />
                    ))
                }
            
            
            
            
            </div>
        </div>
    )
}

export default Shop;
