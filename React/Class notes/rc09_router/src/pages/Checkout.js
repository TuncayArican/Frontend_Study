import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  console.log(location);
  
  return <div>Checkout</div>;
};
console.log("merhaba");
export default Checkout;
