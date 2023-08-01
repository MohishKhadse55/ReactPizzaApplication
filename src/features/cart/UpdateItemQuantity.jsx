import React from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
