import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CardProduct }  from "../../components/CardProduct/CardProduct";
import './Shop.css';

const Shop = () => {
    const database = [
        {title: "Science G.5", author: "Mc Kallen", price: "20 Baht", id: "1"},
        {title: "Math G.4", author: "Joey", price: "25 Baht", id: "2"},
        {title: "Art G.1", author: "Gorche", price: "30 Baht", id: "3"},
    ]
    return (
        <div className="bigContainer">
            <div>Sort by</div>
            <div className="product-center container">
                {
                    database.map(item => (
                        <CardProduct title={item.title} author={item.author} price={item.price} key={item.id} />
                    ))
                }
            
            
            
            
            </div>
        </div>
    )
}

export default Shop;
