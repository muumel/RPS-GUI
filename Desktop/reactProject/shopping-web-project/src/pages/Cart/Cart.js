import React from "react";
import { CartContext } from "../../components/CartContext";
import { useContext } from "react";
import CardCart from "../../components/CardCart/CardCart";
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="cart-page container">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <div>{cart.length === 0 && <div style={{margin: "80px auto" , color: "gray"}}>Cart Is Empty</div>}</div>
        {cart.map((item) => (
          <CardCart
            title={item.title}
            author={item.author}
            price={item.price}
            id={item.id}
            qty={item.qty}
          />
        ))}
      </table>

      <div className="total-price">
          <table>
                <tr>
                    <td>Subtotal</td>
                    <td>0 &#3647;</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>50 &#3647;</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>0 &#3647;</td>
                </tr>
          </table>
      </div>
    </div>
  );
};

export default Cart;
