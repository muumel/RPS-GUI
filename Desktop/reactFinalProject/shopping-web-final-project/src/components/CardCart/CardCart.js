import React from 'react';
import './CardCart.css';


const CardCart = (props) => {
    
    return (
        <tr>
            <td>{props.title}</td>
            <td><input type="number" value="1" style = {{color: "#4b3834"}}/></td>
            <td>{props.price} &#3647; </td>
        </tr>
    )
}

export default CardCart;
