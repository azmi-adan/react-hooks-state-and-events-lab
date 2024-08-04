import React, { useState } from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };
  // / Determine the button text based on the item's cart status
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  // Determine the li class name based on the item's cart status
  const liClassName = isInCart ? "in-cart" : "";
  
 
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>Add to Cart {buttonText}</button>
    </li>
  );
}

export default Item;
