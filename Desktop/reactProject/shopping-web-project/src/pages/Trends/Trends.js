import React from "react";
import { CardProduct }  from "../../components/CardProduct/CardProduct";

const Trends = () => {
  const database = [
    { title: "Singing G.1", author: "Mc Kallen", price: 70, id: "1", qty: "0" },
    { title: "English G.6", author: "Joey", price: 120, id: "2", qty: "0" },
    { title: "Math G.2", author: "Gorche", price: 89, id: "3", qty: "0" },
    { title: "P.E. G.7", author: "Gorche", price: 30, id: "4", qty: "0" },
  ];
  return (
    <div className="bigContainer">
      
      <div className="product-center container">
        {database.map((item) => (
          <CardProduct
            title={item.title}
            author={item.author}
            price={item.price}
            id={item.id}
            qty={item.qty}
          />
        ))}
      </div>
    </div>
  );
};

export default Trends;
