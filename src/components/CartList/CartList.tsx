import React from "react";
import { Cart } from "./Cart";

const initItems = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 }
];

export const CartList=()=> {
  const [items, setItems] = React.useState(initItems);

  const getSignAndCalculate = (itemName: string, sign: string) => {
    console.log(itemName, sign);
    const itemsCopy = [...items];
    itemsCopy.forEach((ic: any) => {
      if (ic.name === itemName) {
        if (sign === "+") {
          ic.qty += 1;
        } else {
          ic.qty -= 1;
        }
      }
    });
    setItems(itemsCopy);
  };

  return (
    <div className="App">
      <Cart items={items} getSignAndCalculate={getSignAndCalculate} />
    </div>
  );
}

// passing hook to child typescript:
// https://stackoverflow.com/questions/54575523/issue-with-passing-hook-to-child-typescript
