import React from "react";
import { CardProduct }  from "../../components/CardProduct/CardProduct";

const Trends = () => {
  const database = [
    { title: "Agriculture G.8", author: "Mc Kallen", price: 50, id: "1", qty: "0" },
    { title: "Chemistry G.10", author: "Joey", price: 80, id: "2", qty: "0" },
    { title: "Potion", author: "Gorche", price: 79, id: "3", qty: "0" },
    { title: "Acting", author: "Gorche", price: 69, id: "4", qty: "0" },
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
