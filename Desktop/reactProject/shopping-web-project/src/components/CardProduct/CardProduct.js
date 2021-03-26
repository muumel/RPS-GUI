import React, { useContext } from 'react'
import './CardProduct.css';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../CartContext';

export const CardProduct = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const product = {title: props.title, author: props.author, price: props.price};
        setCart(currentState => [...currentState, product]);
    }

    
    
    return (
        <div className="CardProduct">
            <div className="product-header">
                <img src="https://images.unsplash.com/photo-1568819946028-dc9271a8d1a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80" alt="product" />
                <ul className="icons">
                    <span className="" ><i className="fas fa-heart" style={{transform: 'translate(12%,48%)'}}></i></span>
                    <span className="" onClick={addToCart}><i className="fas fa-shopping-cart" style={{transform: 'translate(12%,48%)'}}></i></span>
                    <span className=""><i className="fas fa-external-link-alt"style={{transform: 'translate(12%,45%)'}}></i></span>
                </ul>
            </div>
            <div className="product-footer">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="">{props.title}</h3>
                    <h5 className="">{props.author}</h5>
                </NavLink>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4 class="price">{props.price}</h4>
            </div>
        </div>
    )
}


